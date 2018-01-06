//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import * as users from './users.reducers';
import * as report from './report.reducers';
import * as router from './router.reducers';

import { Report } from '../../models';

export interface State {
    users: users.UsersState;
    report: report.ReportState;
    router: router.RouterState;
}

export const reducers: ActionReducerMap<State> = {
    users: users.reducer,
    report: report.reducer,
    router: router.reducer
}

// for select 
export const getUserState = (state: State) => state.users;         // point to UserState
export const getIsLogin = createSelector(getUserState, users.getIsLogin);
export const getCurrentUser = createSelector(getUserState, users.getCurrentUser);

export const getReportState = (state: State) => state.report;      // point to ReportState
export const getReports = createSelector(getReportState, report.getReports);
export const getReportsLoaded = createSelector(getReportState, report.getReportsLoaded);
export const getReportsLoading = createSelector(getReportState, report.getReportsLoading);

export const getRouterState = (state: State) => state.router;

// select report by router params id
export const getSelectedReport = createSelector(getReportState, getRouterState, (reportState, router): Report => {
    return router.state && reportState.reports.filter(report => report.id === +router.state.params.rptId)[0];
});


export { CustomeSerializer } from './router.reducers';
