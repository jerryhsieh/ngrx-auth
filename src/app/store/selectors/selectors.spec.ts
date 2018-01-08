//
//
// File name : selectors.spec.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducer from '../reducers';
import * as fromAction from '../actions';
import * as fromSelectors from './selectors';

import { Report } from '../../models';

describe('Selectors', () => {
    let store: Store<fromReducer.State>;
    let report1: Report = { id: 1, master: 'test', image: 'test', title: 'test', report: 'test' };
    let report2: Report = { id: 2, master: 'test', image: 'test', title: 'test', report: 'test' };
    let reports: Report[] = [report1, report2];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromReducer.reducers)
            ]
        });

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });

    describe('Report Selectors', () => {
        describe('Get Report', () => {
            it('should return reports array', () => {
                let result;
                store
                    .select(fromSelectors.getReports)
                    .subscribe(res => {
                        result = res;
                    });

                expect(result).toEqual([]);             // initial state

                store.dispatch(new fromAction.getReportSuccessAction(reports));
                expect(result).toEqual(reports);

            })
        });


        describe('Get Selected Report', () => {
            it('should return selected report', () => {
                let result;
                let params;

                store.dispatch(new fromAction.getReportSuccessAction(reports));
                store.dispatch({
                    type: 'ROUTER_NAVIGATION',
                    payload: {
                        routerState: {
                            url: '/member/report/2',
                            queryParams: {},
                            params: { rptId: '2' }
                        },
                        event: {}
                    },
                });

                store.select(fromSelectors.getRouterState)
                    .subscribe(routerState => (params = routerState.state.params));

                expect(params).toEqual({ rptId: '2' });

                store.select(fromSelectors.getSelectedReport)
                    .subscribe(selectedReport => result = selectedReport);

                expect(result).toEqual(report2);

            })
        });

    })
});
