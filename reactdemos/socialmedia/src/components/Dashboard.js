import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import MenuBar from './MenuBar'
import SideBar from './SideBar'
export default function Dashboard() {

  return (
    <div>
        {
            localStorage.getItem('email') ? 
            (
            <div>
                <MenuBar email={localStorage.getItem('email')}/>
                <div className='row'>
                    <div className='col-md-2'>
                        <SideBar/>
                    </div>
                    <div className='col-md-10'>
                        <Outlet/>
                    </div>
                </div>
            </div>
            
            )
            :
             <Navigate to='/login'/> 
        }
    </div>
  )
}
