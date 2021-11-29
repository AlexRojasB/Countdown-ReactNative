import { saveTme } from "./CountdownActionTypes"

export const CountdownFinished = (countdownTime) => {
    type: saveTme,
    payload: countdownTime
}