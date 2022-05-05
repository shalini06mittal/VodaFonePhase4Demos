import React from 'react'
import { useParams , useNavigate, useLocation} from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../../model/data';
export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    console.log(location)
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
            <p><button onClick={()=>{
                    deleteInvoice(invoice.number)
                    //navigate('../')
                    navigate(-1)
                        }}>Delete</button></p>
            </>
        )
        }
    </div>
  )
}
