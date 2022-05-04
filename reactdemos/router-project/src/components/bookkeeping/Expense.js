import React from 'react'
import { useParams } from 'react-router-dom';
import { getExpenseDetails } from '../../model/data';
export default function Invoice() {
    let params = useParams();
    let name = params.name;
    let details = getExpenseDetails(name);
  return (
    <div style={{ padding: '1rem'}}>
        {details === undefined ? <div>Name is invalid</div>
        : (<>
            <h3>{details.WHO} </h3>
            <div style={{display:'flex'}}>
            {
                details.WEEK.map((weekday, index)=>(
                    <div key={index} style={{borderRight:'1px solid black', padding:'1rem'}}>
                        <p>Week Number : {weekday.NUMBER} </p>
                        <div>
                            {
                                weekday.EXPENSE.map((data, index)=>(
                                    <p key={index}> {data.WHAT} :  ${data.AMOUNT}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            </div>
            </>
        )
        }
    </div>
  )
}
