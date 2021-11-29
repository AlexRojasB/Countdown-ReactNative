/* eslint-disable prettier/prettier */
import {saveTme} from '../actions/CountdownActionTypes';
const INITIAL_STATE = {
  saveTme: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case saveTme:
    default:
      return state;
  }
};
