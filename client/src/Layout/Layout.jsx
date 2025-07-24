import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            {/* Main content area */}
            <div className="ml-[150px] p-4">
               <Outlet/>
            </div>
        </div>
    )
}

export default Layout