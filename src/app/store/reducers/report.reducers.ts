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
}

const initialState: State = {
    reports: [],
}

export function reducer(state: State = initialState, action: actions.ReportActions): State {
    switch (action.type) {
        case actions.RESET_REPORT:
            return initialState;
        case actions.GETREPORT_SUCCESS:
            return Object.assign({}, state, { reports: action.payload });
        default:
            return state;
    }
}

// for selector
export const getReports = (state: State) => state.reports;

