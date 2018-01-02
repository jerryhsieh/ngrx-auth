//
//
// File name : users.reducers.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { ActionReducer, Action, ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions';


export interface State {
    isLogin: boolean;
    currentUser: string;
}

const initialState: State = {
    isLogin: false,
    currentUser: ''
}

export function reducer(state: State = initialState, action: actions.UserActions): State {
    switch (action.type) {
        case actions.LOGOUT:
            return initialState;
        case actions.LOGIN_SUCCESS:
        case actions.GETUSER_SUCCESS:
            return Object.assign({}, state, { currentUser: action.payload, isLogin: true });
        default:
            return state
    }
}


// for selector
export const getIsLogin = (state: State) => state.isLogin;
export const getCurrentUser = (state: State) => state.currentUser;
