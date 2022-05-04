import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { getExpenses } from '../../model/data';

export default function Expenses() {
  let expenses = getExpenses();
  return (
    <div style={{display:'flex'}}>
      <nav style={{
        borderRight:'1px solid',
        padding:'1rem'
      }}>
        {
          expenses.map(expense=>(
            <Link  style={{
              display:'block', margin:'1rem 0'
            }} key ={expense.WHO} 
            to={`${expense.WHO}`}>
              {expense.WHO}</Link>
          ))
        }

      </nav>
        <Outlet/>
    </div>
  )
}
