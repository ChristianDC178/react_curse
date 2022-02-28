import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchCardApp from './FetchCardApp'
import ReactContextApp from './ReactContextApp';
import reportWebVitals from './reportWebVitals';
import UseReducerApp from './UseReducerApp'

ReactDOM.render(
  <React.StrictMode>
    {/*<App title="App Title" />*/}
    {/*<FetchCardApp title="Fetch Card" />*/}
    {/*<ReactContextApp title="React Context"></ReactContextApp>*/}
    {<UseReducerApp title="Use Reducer"></UseReducerApp>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
