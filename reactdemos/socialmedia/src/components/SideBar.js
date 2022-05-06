import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <nav className='nav flex-column'>
            <Link className='nav-link' to='/home'>Home</Link>   
            <Link className='nav-link' to='/profile'>Profile</Link>   
            <Link className='nav-link' to='/settings'>Settings</Link>    
        </nav>  
        
    </div>
  )
}
