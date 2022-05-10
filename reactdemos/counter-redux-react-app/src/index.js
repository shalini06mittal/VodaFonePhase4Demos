import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import counterreducer, { decrement } from './redux/CounterReducerSlice';

const store = configureStore({
  reducer:{
    counterreducer
  }
})
const mythunk = (dispatch, getState)=>{
  console.log('thunk running...')
  const stateBefore = getState()
  console.log(`Before Count State ${stateBefore.counterreducer.count}`)
  setTimeout(() => {
    dispatch(decrement());
    const stateAfter = getState()
    console.log(`After Count State ${stateAfter.counterreducer.count}`)
  }, 4000);
}
store.dispatch(mythunk)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
