import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'reactstrap';

const initialState = {
    counter1: 0,
    counter2: 10,
    initial: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state, counter1: state.counter1 + action.payload
            }
        case 'decrement':
            return {
                ...state, counter1: state.counter1 - action.payload
            }
        case 'reset':
            return {
                ...state, counter1: state.initial
            }
        default:
            return state
    }
}

const Counter = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{counter.counter1}</div>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment by 1</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload: 1 })} > Decrement by 1</Button>
                <Button color="danger" onClick={() => dispatch({ type: 'reset' })} > Reset by 1</Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={() => dispatch({ type: 'increment', payload: 2 })}>Increment by 2</Button>
                <Button color="dark" onClick={() => dispatch({ type: 'decrement', payload: 2 })} > Decrement by 2</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter






