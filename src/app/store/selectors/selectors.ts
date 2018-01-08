//
//
// File name : selectors.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { createSelector } from 'reselect';

import * as fromReducer from '../reducers';
import * as users from '../reducers/users.reducers';
import * as reports from '../reducers/report.reducers';
import * as router from '../reducers/router.reducers';

import { Report } from '../../models';

// for select 
export const getUserState = (state: fromReducer.State) => state.users;                        // point to users state subtree
export const getIsLogin = createSelector(getUserState, users.getIsLogin);
export const getCurrentUser = createSelector(getUserState, users.getCurrentUser);

export const getReportState = (state: fromReducer.State) => state.report;                       // point to report state subtree
export const getReports = createSelector(getReportState, reports.getReports);
export const getReportsLoaded = createSelector(getReportState, reports.getReportsLoaded);
export const getReportsLoading = createSelector(getReportState, reports.getReportsLoading);

export const getRouterState = (state: fromReducer.State) => state.router;                        // point to router state subtree

// select report by router params id, like join in database
export const getSelectedReport = createSelector(getReportState, getRouterState, (reportState, router): Report => {
    return router.state && reportState.reports.filter(report => report.id === +router.state.params.rptId)[0];
});


