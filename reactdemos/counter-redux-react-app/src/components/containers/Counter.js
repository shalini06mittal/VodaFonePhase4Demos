import React, { Component } from 'react'
import CounterControl from '../output/CounterControl'
import CounterOutput from '../output/CounterOutput'
import {increment, decrement, add, sub} from '../../redux/CounterReducerSlice';
import { connect } from 'react-redux';
class Counter extends Component {
    state={
        count:0
    }
    handleCounterChange = (action, value)=>{
        switch(action){
            case 'inc':
                this.setState({count:this.state.count+1});
                break;
            case 'dec':
                    this.setState({count:this.state.count-1});
                    break;
            case 'add':
                        this.setState({count:this.state.count+value});
                        break;
            case 'sub':
                this.setState({count:this.state.count-value});
                break;
        }
    }
  render() {
      console.log(this.props)
    return (
    //   <div>
    //       <CounterOutput value={this.state.count}/>
    //       <CounterControl label='Increment' clicked={()=>this.handleCounterChange('inc')}/>
    //       <CounterControl label='Decrement' clicked={()=>this.handleCounterChange('dec')}/>
    //       <CounterControl label='Add 5' clicked={()=>this.handleCounterChange('add',5)}/>
    //       <CounterControl label='Sub 3' clicked={()=>this.handleCounterChange('sub',3)}/>
    //   </div>
    <div>
          <CounterOutput value={this.props.count}/>
          <CounterControl label='Increment' clicked={this.props.onIncrement}/>
          <CounterControl label='Decrement' clicked={this.props.onDecrement}/>
          <CounterControl label='Add 5' clicked={()=>this.props.onAdd(5)}/>
          <CounterControl label='Sub 3' clicked={()=>this.props.onSub(3)}/>
      </div>
    )
  }
}
// maps the stores state to the component props
// creducer is the name of the reducer configured in index.js
// and count is the state within the slice
const mapStateToProps =(state)=>{
    console.log(state)
    return {
        count:state.counterreducer.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onIncrement: ()=>dispatch(increment()),
        onDecrement: ()=>dispatch(decrement()),
        onAdd: (data)=>dispatch(add(data)),
        onSub: (data)=>dispatch(sub(data)),
    }
}
// key of the shop
export default connect(mapStateToProps,mapDispatchToProps)(Counter);