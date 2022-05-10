import {createSlice} from '@reduxjs/toolkit';

// middleware

export const incrementAsync = ()=>(dispatch)=>{
    setTimeout(() => {
        dispatch(increment())
    }, 2000);
}
const initialState = {count:10}
const counter = createSlice({
    name:'counter',
    initialState,
    reducers:{
        /*
        create=SLice allows you to directly modify the state as 
        it uses a special library called  immer which internally user createReducer
        and modifies the state in immutable way
        */
        increment:(state)=> {
            state.count++
        },
        decrement:(state)=> {state.count--},
        add:(state, action)=> {state.count+=action.payload},
        sub:(state, action)=> {state.count-= action.payload},
    }
})

export let {increment, decrement, add, sub} = counter.actions
export default counter.reducer