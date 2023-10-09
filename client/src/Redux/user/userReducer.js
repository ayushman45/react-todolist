import { SET_USER , RESET_USER } from "./userType";

// This is the reducer for the user.

const usr=null;

export const userReducer = (state = usr, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload;
        case RESET_USER:
            return null;
        default:
            return state;
    }
}