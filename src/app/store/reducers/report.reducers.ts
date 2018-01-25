//
//
// File name : report.reducers.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Action } from '@ngrx/store';

import * as actions from '../actions';
import { Report } from '../../models';


export interface ReportState {
    reports: Report[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: ReportState = {
    reports: <Report[]>[],
    loaded: false,
    loading: false
}

export function reducer(state: ReportState = initialState, action: actions.ReportActions): ReportState {
    switch (action.type) {
        case actions.RESET_REPORT:
            return initialState;
        case actions.GETREPORT:
            return { ...state, loaded: false, loading: true };
        case actions.GETREPORT_SUCCESS:
            return { ...state, reports: action.payload, loaded: true, loading: false };
        case actions.GETREPORT_FAIL:
            return { ...state, loaded: false, loading: false };
        default:
            return state;
    }
}

// for selector
export const getReports = (state: ReportState) => state.reports;
export const getReportsLoaded = (state: ReportState) => state.loaded;
export const getReportsLoading = (state: ReportState) => state.loading;

