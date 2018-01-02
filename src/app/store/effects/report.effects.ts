//
//
// File name : report.effects.ts
// Created by: Jerry Hsieh @ 2018-01-02
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as actions from '../actions';
import { ReportService } from '../../member/service/report.service';
import { Report, Response } from '../../models';

@Injectable()
export class ReportEffects {
    constructor(
        private action$: Actions,
        private reportService: ReportService
    ) { }

    @Effect()
    init$: Observable<Action> = defer(() => {
        console.log('inside report init effect');
        return this.reportService.getReportsFromServer()
            .map((res: Response) => {
                console.log('in get reports effect');
                if (res.success) {
                    return new actions.getReportSuccessAction(res.payload);
                } else {
                    return new actions.getReportFailAction(res.payload);
                }
            })
            .catch(err => of(new actions.getUserFailAction(err)));

    })

}
