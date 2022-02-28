import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Apps
//import App from './App';
//import FetchCardApp from './FetchCardApp'
//import ReactContextApp from './ReactContextApp';
//import UseReducerApp from './UseReducerApp'
import RouterApp from './RouterApp'
import { BrowserRouter } from "react-router-dom";

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
