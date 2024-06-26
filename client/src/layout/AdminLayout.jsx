import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoutBtn from '../components/LogoutBtn'
import UserNav from '../components/UserNav'

function AdminLayout() {
  return (
    <>
        <header className='flex shadow-slate-50 shadow-sm px-1 py-2 justify-between items-center gap-2'>
            <h2 className='mr-auto font-bold text-2xl mr-auto'>Admin</h2>
            <UserNav/>
        </header>
        <Outlet/>
    </>
  )
}

export default AdminLayout