import React, { Component } from 'react'
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[
                { itemName:'Milk',
                id:'1',
                price:40,
                description: 'Milk keeps you healthy'},
                {
                    itemName:'Coffee',
                    id:'2',
                    price:40,
                    description: 'Coffee rejuvenates you'},
                {
                    itemName:'Tea Leaves',
                    id:'3',
                    price:140,
                    description: 'Tea leaves for stronger you'},
                {
                    itemName:'Bread',
                    id:'4',
                    price:240,
                    description: 'fresh Bread'}
            ]
        }
    }
    deleteItem = (id)=>{
        alert('item to be deleted '+id);
        // delete the item from the list
        let items = [...this.state.items]
        console.log(items)
        this.setState({items : items.filter(item=> item.id!== id)})
    }
    render() {
        return (
            <div>
                {this.state.items.map(item=>{
                    return <GroceryItem key={item.id}
                    item={item} deleteHandler={this.deleteItem}/>
                })}
                
            </div>
        )
    }
}
