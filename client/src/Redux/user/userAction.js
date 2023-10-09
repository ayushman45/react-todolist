import { SET_USER , RESET_USER } from "./userType";

// This is the action creator for setting the user.

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

// This is the action creator for resetting the user.

export const resetUser = () => {
    return {
        type: RESET_USER
    }
}