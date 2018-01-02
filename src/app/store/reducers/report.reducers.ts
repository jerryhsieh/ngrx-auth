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


export interface State {
    reports: Report[];
    selectedReport: Report;
}

const initialState: State = {
    reports: [],
    selectedReport: null
}

export function reducer(state: State = initialState, action: actions.ReportActions): State {
    switch (action.type) {
        case actions.GETREPORTID: {
            let id = action.payload;
            console.log('want to get id', id);
            let report = state.reports.filter(rpt => rpt.id === id)[0];
            console.log('should get report', report);
            return Object.assign({}, state, { selectedReport: report });
        }
        case actions.GETREPORT_SUCCESS:
            return Object.assign({}, state, { reports: action.payload });
        default:
            return state;
    }
}

// for selector
export const getReports = (state: State) => state.reports;
export const getSelectedReport = (state: State) => state.selectedReport;
