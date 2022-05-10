import React, { useState } from 'react'
import CounterControl from '../output/CounterControl'
import CounterOutput from '../output/CounterOutput'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, add , sub, incrementAsync} from '../../redux/CounterReducerSlice';


export default function CounterFunc() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counterreducer.count)
    const [value, setValue] = useState(0)

  return (
    <div>
        <h1>Functional Component</h1>
          <CounterOutput value={count}/>
          <div>
              <input type='text' style={{
                  margin:'20px',
                  width:'80px',
                  height:'30px',
                  textAlign:'center'
              }}
              value={value} onChange={(e)=>setValue(e.target.value)}/>
          </div>
          <CounterControl label='Increment' clicked={()=>dispatch(incrementAsync())}/>
          <CounterControl label='Decrement'clicked={()=>dispatch(decrement())} />
          <CounterControl label='Add ' clicked={()=>dispatch(add(parseInt(value)))}/>
          <CounterControl label='Sub ' clicked={()=>dispatch(sub(parseInt(value)))}/>
      </div>
  )
}
