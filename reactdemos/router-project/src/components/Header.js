import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink 
                to='/'>Home</NavLink></li>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li> <NavLink to='/books'>Book Keeping Details</NavLink></li>
                <li> <NavLink to='/expenses'>Expenses</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}
