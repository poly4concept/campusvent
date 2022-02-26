import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Components/loading'


const Layout = () => {
    
    return (
        <div className="App">
            <Suspense  fallback={<Loading/>}>
                <ToastContainer />  
                <Outlet />
            </Suspense>
        </div>
    )
}

export default Layout
