import React from 'react'
import {getInvoices} from '../../model/data';
import {Link} from 'react-router-dom';
export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{display:'flex'}}>
      <nav style={{
        borderRight:'1px solid',
        padding:'1rem'
      }}>
        {
          invoices.map(invoice=>(
            <Link  style={{
              display:'block', margin:'1rem 0'
            }}
            to=''>{invoice.name}</Link>
          ))
        }

      </nav>

    </div>
  )
}
