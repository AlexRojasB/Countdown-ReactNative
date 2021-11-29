import { saveTme } from "../actions/CountdownActionTypes";

export default (state, action) => {
    switch (action.type) {
        case saveTme:
        default:
            return state;
    }
}