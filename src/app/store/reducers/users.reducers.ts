import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';

import * as users from '../actions';


export interface State {
    isLogin: boolean;
    currentUser: string;
}

const initialState: State = {
    isLogin: false,
    currentUser: ''
}

export function reducer(state: State = initialState, action: users.UserActions): State {
    switch (action.type) {
        case users.LOGOUT:
            return initialState;
        case users.LOGIN_SUCCESS:
        case users.GETUSER_SUCCESS:
            return Object.assign({}, state, { currentUser: action.payload, isLogin: true });
        default:
            return state
    }
}


// for selector
export const getIsLogin = (state: State) => state.isLogin;
export const getCurrentUser = (state: State) => state.currentUser;
