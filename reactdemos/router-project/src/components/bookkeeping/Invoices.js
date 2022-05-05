import React from 'react'
import {getInvoices} from '../../model/data';
import {Link,NavLink, Outlet, useSearchParams, useLocation} from 'react-router-dom';
export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  // console.log(location.pathname)
   console.log(location)
  const handleChange = (event)=>{
    let filter = event.target.value;
    if(filter) setSearchParams({filter})
    else setSearchParams({})
  }
  return (
    <div style={{display:'flex'}}>
      <nav style={{borderRight:'1px solid',padding:'1rem'
      }}>
        <input type='text' value={searchParams.get('filter') || ""}
        placeholder='Enter name to search' onChange={handleChange}/>
        {
            invoices.filter((invoice)=>{
                  let filter = searchParams.get('filter');
                  if(!filter) return true;
                  let name = invoice.name.toLowerCase();
                  return name.startsWith(filter.toLowerCase());
                  }).map(invoice=>(<NavLink  style={ ({isActive}) =>{
              return {
              display:'block', 
              margin:'1rem 0',
              color: isActive ? "red" :""
            }
          }} 
          key ={invoice.number} 
            to={`${invoice.number}`}>
              {invoice.name}</NavLink>
          ))
        }
      </nav>
        <Outlet/>
    </div>
  )
}
