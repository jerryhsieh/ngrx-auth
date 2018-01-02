//
//
// File name : report.actions.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Action } from '@ngrx/store';
import { Report } from '../../models';


// define Actions type
export const GETREPORT = '[report] GETREPORT';
export const GETREPORT_SUCCESS = '[report] GETREPORT_SUCCESS';
export const GETREPORT_FAIL = '[report] GETREPORT_FAIL';

export const GETREPORTID = '[report] GETREPORTID';


// define Actions classes
export class getReportAction implements Action {
    readonly type = GETREPORT;
}


export class getReportSuccessAction implements Action {
    readonly type = GETREPORT_SUCCESS;

    constructor(public payload: Report[]) { }
}

export class getReportFailAction implements Action {
    readonly type = GETREPORT_FAIL;

    constructor(public payload: any) { }
}

export class getReportIdAction implements Action {
    readonly type = GETREPORTID;

    constructor(public payload: number) { }
}

export type ReportActions
    = getReportAction
    | getReportSuccessAction
    | getReportFailAction
    | getReportIdAction;
