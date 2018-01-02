//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { createSelector } from 'reselect';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as users from './reducers/users.reducers';


export interface State {
    users: users.State;
}

export const reducers: ActionReducerMap<State> = {
    users: users.reducer
}

// for select 
export const getUserStatus = (state: State) => state.users;
export const getIsLogin = createSelector(getUserStatus, users.getIsLogin);
export const getCurrentUser = createSelector(getUserStatus, users.getCurrentUser);

// for dispatch action
export * from './actions';
export * from './effects';
