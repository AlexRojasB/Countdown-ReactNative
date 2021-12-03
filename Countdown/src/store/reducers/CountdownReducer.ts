/* eslint-disable prettier/prettier */
import {clearHistory, saveTme} from '../actions/CountdownActionTypes';
const INITIAL_STATE: {
  saveTime: historyType[]
} = {
  saveTime: [],
};
export type historyType = {
  when: string;
  was: string;
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case saveTme:
      const times = state.saveTime;
      const histDate = new Date().toDateString() + " " + new Date().toLocaleTimeString();
      // console.log('date ' + histDate + ' was ' + action.payload);
      const time: historyType = { when: histDate, was: action.payload};
      console.log(time);
      times.push(time);
      return {...state, saveTime: times};
      case clearHistory:
        return Object.assign(state, INITIAL_STATE);
    default:
      return state;
  }
};
