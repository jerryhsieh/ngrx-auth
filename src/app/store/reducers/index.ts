//
//
// File name : index.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import * as users from './users.reducers';
import * as report from './report.reducers';
import * as router from './router.reducers';

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


export { CustomeSerializer } from './router.reducers';


