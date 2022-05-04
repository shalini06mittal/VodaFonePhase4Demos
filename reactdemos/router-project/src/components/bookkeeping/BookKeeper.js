import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const spans={
    marginRight:'10px'
}
export default function BookKeeper() {
  return (
    <div>
        <h1>BookKeeper</h1>
        <nav style={{
            borderBottom:'1px solid',
            paddingBottom:'1rem'
        }}>
        <span style={spans}>
            <Link to='invoices'>Invoices</Link>
        </span>
        <span>
        <Link to='expenses'>Expenses</Link>
        </span>
        </nav>
        <div>
          <p>This is a book keeping example to understannd React Roter</p>
        </div>
        <Outlet/>
        <div>
          <p>Implemented as part of learning process at Vodafone</p>
        </div>
    </div>
  )
}
