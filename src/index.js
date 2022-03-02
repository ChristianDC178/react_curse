//Apps
//import App from './App';
//import FetchCardApp from './FetchCardApp'
//import ReactContextApp from './ReactContextApp';
//import UseReducerApp from './UseReducerApp'
//import RouterApp from './apps/RouterApp'
import ReduxApp from './apps/ReduxApp';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import allReducers from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>

      {/*<App title="App Title" />*/}
      {/*<FetchCardApp title="Fetch Card" />*/}
      {/*<ReactContextApp title="React Context"></ReactContextApp>*/}
      {/*{<UseReducerApp title="Use Reducer"></UseReducerApp>}/}*/}
      {/*<RouterApp title="Use Reducer"></RouterApp>*/}

      <BrowserRouter>
        <ReduxApp title="Redux App"></ReduxApp>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
