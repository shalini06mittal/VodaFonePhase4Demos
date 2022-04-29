import React from 'react'
import './GroceryItem.css'

const para={
    color:'brown',
    textAlign:'center'
}
export default function GroceryItem(props) {
    let {id, itemName, price, description} = props.item;
    let deleteHandler = props.deleteHandler;
  return (
    <div className='item'>
        <h1>Grocery Item : {id}</h1>
        <p style={para}>Name : {itemName}</p>
        <p>Price : {price}</p>
        <p>Description : {description}</p>
        <button onClick={()=>deleteHandler(id)}>Delete</button>
    </div>
  )
}

