//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';

import * as users from './users.reducers';
import * as report from './report.reducers';

export interface State {
    users: users.State;
    report: report.State;
}

export const reducers: ActionReducerMap<State> = {
    users: users.reducer,
    report: report.reducer
}

// for select 
export const getUserState = (state: State) => state.users;
export const getIsLogin = createSelector(getUserState, users.getIsLogin);
export const getCurrentUser = createSelector(getUserState, users.getCurrentUser);

export const getReportState = (state: State) => state.report;
export const getReports = createSelector(getReportState, report.getReports);
export const getSelectedReport = createSelector(getReportState, report.getSelectedReport);
