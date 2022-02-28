import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Apps
import App from './App';
import FetchCardApp from './FetchCardApp'
import ReactContextApp from './ReactContextApp';
import UseReducerApp from './UseReducerApp'
import RouterApp from './RouterApp'

ReactDOM.render(
  <React.StrictMode>
    {/*<App title="App Title" />*/}
    {/*<FetchCardApp title="Fetch Card" />*/}
    {/*<ReactContextApp title="React Context"></ReactContextApp>*/}
    {/*{<UseReducerApp title="Use Reducer"></UseReducerApp>}/}*/}
    <RouterApp title="Use Reducer"></RouterApp>
  </React.StrictMode>,
  document.getElementById('root')
);
