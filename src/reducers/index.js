
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import counterReducer from './counterReducer';

//reducers
const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
})

export default allReducers