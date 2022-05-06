import React from 'react'
import { Link } from 'react-router-dom'
import './MenuBar.css'
export default function MenuBar(props) {
  return (
    <header>
    <div className='left bar'>  
        <h2>ConnectZ</h2>          
    </div>
    <div className='right'>    
        <div>{props.email}</div>  
        <div><Link className='link' to='/login' 
        onClick={()=>{
          localStorage.removeItem('email')
        }}
        >Logout</Link></div>             
    </div>
    <div className='clear'></div>    
    
</header>
  )
}
