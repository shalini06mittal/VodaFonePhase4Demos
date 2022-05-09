const  redux= require('redux');
const {createStore} = redux;
// STATE
const initialstate = {count:0}
// ACTION
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
// ACTION CREATORS
const increment = (value)=>{
    return {type:INCREMENT, data:value}
}
// REDUCER
function counterReducer(state=initialstate, action)
{
    console.log('reducer')
    let data = 0;
    if(action.data=== undefined)
        data = 1
    else
        data = action.data
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count+ data
            }
        case DECREMENT:
            return {
                    ...state,
                    count: state.count-data
                }  
        default: return state
    }
}
const store = createStore(counterReducer);
console.log(store.getState())
store.dispatch(increment(10))
store.dispatch({type:INCREMENT})
console.log(store.getState())
store.dispatch({type:DECREMENT})
console.log(store.getState())