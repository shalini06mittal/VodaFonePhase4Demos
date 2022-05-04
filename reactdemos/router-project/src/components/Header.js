import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to='/about'>About</Link></li>
                <li> <Link to='/books'>Book Keeping Details</Link></li>
                <li> <Link to='/expenses'>Expenses</Link></li>
            </ul>
        </nav>
    </div>
  )
}
