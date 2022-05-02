import React from 'react'

export default function BmiInfo({data}) {
    let date = new Date();
    let currdate = date.getDate()+
    ' '+(date.getMonth()+1)+
    ' '+date.getFullYear();
  return (
    <div  className="content">
        <p>Date : {currdate}</p>
        <p>Weight : {data.weight}</p>
        <p>Height : {data.height}</p>
        <p>BMI : {data.bmi}</p>
        </div>
  )
}
