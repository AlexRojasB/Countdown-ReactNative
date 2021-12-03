import {clearHistory, getHistory, saveTme} from './CountdownActionTypes';

export const CountdownFinished = (countdownTime: string) => ({
  type: saveTme,
  payload: countdownTime,
});

export const GetHistoryTimers = () => ({
  type: getHistory,
  payload: '',
});

export const ClearHistoryTimers = () => ({
  type: clearHistory,
  payload: '',
});
