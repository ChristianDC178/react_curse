import '../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, auth } from '../actions'

function ReduxApp() {

    const counter = useSelector(state => state.counter)
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()


    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <h1>Login {login}</h1>

            <input type="button" value="+" onClick={() => dispatch(increment())} />
            <input type="button" value="-" onClick={() => dispatch(decrement())} />

            <input type="button" value="Auth" onClick={() => dispatch(auth())} />


            <p>{login ? "Logged" : "Not logged yet"}</p>
        </div>
    );

}

export default ReduxApp;
