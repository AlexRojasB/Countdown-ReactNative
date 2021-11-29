/* eslint-disable prettier/prettier */
import {combineReducers, createStore} from 'redux';
import CountdownReducer from './reducers/CountdownReducer';

const reducers = combineReducers({
  countdown: CountdownReducer,
});

export default createStore(reducers);
