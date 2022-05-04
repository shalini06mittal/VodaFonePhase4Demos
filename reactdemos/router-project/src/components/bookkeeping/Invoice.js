import React from 'react'
import { useParams } from 'react-router-dom';
import { getInvoice } from '../../model/data';
export default function Invoice() {
    let params = useParams();
    let id = params.invoiceid;
    
    const fetchInvoice = ()=>{
        if( !isNaN(parseInt(id)) && isFinite(id) ){
            let invoice =getInvoice(parseInt(id));
            console.log(invoice);
            return invoice;
        }
        return undefined;
    }
    let invoice = fetchInvoice();
  return (
    <div style={{ padding: '1rem' }}>
        {invoice === undefined ? <div>Invoice number is invalid</div>
        : (<>
            <h3>{invoice.name} :{invoice.number} </h3>
            <p>Total Due: {invoice.amount} </p>
            <p>Due Date :  {invoice.due}</p>
            </>
        )
        }
    </div>
  )
}
