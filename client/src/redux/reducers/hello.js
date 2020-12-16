import {SET_HELLO} from "../types";

const initialState = '';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HELLO:
            return action.payload;
        default:
            return state;
    }
}