import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
    <section>
      <h1>Posts Redux Route React Example</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Posts</Link>
          <Link to="/add">Add a new post</Link>
        </div>
      </div>
    </section>
  </nav>
  )
}
