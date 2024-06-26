import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const res = await axios.get("/auth/refresh", { withCredentials : true })
        const token = res.data.token
        setAuth( prev => {
            return { 
                name  : res.data.username,
                id    : res.data.id,
                role  : res.data.role, 
                token 
            }
        })
        
        return token    
    }
    return refresh
}

export default useRefreshToken