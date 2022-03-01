import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

//Apps
//import App from './App';
//import FetchCardApp from './FetchCardApp'
//import ReactContextApp from './ReactContextApp';
//import UseReducerApp from './UseReducerApp'
import RouterApp from './apps/RouterApp'

//actions
const increment = (value) => {
  return { type: 'INCREMENT', payload: value }
}

const decrement = (value) => {
  return { type: 'DECREMENT', payload: value }
}
//reducers
const counterReducer = (state = 0, action) => {

  if (!action.type) return state

  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - action.payload
    default:
      return state
  }
}

//store
let store = createStore(counterReducer)
//display
store.subscribe(() => {
  console.log(store.getState())
})

//dispatch the action
store.dispatch(increment(5))
store.dispatch(decrement(4))


ReactDOM.render(
  <React.StrictMode>
    {/*<App title="App Title" />*/}
    {/*<FetchCardApp title="Fetch Card" />*/}
    {/*<ReactContextApp title="React Context"></ReactContextApp>*/}
    {/*{<UseReducerApp title="Use Reducer"></UseReducerApp>}/}*/}

    <BrowserRouter>
      <RouterApp title="Use Reducer"></RouterApp>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
