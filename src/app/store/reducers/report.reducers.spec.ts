//
//
// File name : report.reducers.spec.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import * as fromReport from './report.reducers';
import * as fromAction from '../actions/report.actions';

import { Report } from '../../models';

describe('Report Reducers', () => {

    describe('undefined action', () => {
        it('should return initial state', () => {
            const { initialState } = fromReport;
            const action = {} as any;
            const state = fromReport.reducer(undefined, action);
            expect(state).toBe(initialState);
        })
    });

    describe('get report action', () => {
        it('should set loading to true', () => {
            const { initialState } = fromReport;
            const action = new fromAction.getReportAction();
            const state = fromReport.reducer(initialState, action);
            expect(state.reports).toEqual([]);
            expect(state.loaded).toEqual(false);
            expect(state.loading).toEqual(true);
        })
    });

    describe('get report success action', () => {
        it('should get array of reports', () => {
            const reports: Report[] = [
                { id: 1, master: 'test', image: 'test', title: 'test', report: 'test' },
                { id: 2, master: 'test', image: 'test', title: 'test', report: 'test' },
            ];
            const { initialState } = fromReport;
            const action = new fromAction.getReportSuccessAction(reports);
            const state = fromReport.reducer(initialState, action);
            expect(state.reports).toEqual(reports);
            expect(state.loaded).toEqual(true);
            expect(state.loading).toEqual(false);
        })
    });


    describe('Report Selectors', () => {
        describe('get report selector', () => {
            it('should get array of reports', () => {
                const reports: Report[] = [
                    { id: 1, master: 'test', image: 'test', title: 'test', report: 'test' },
                    { id: 2, master: 'test', image: 'test', title: 'test', report: 'test' },
                ];
                const { initialState } = fromReport;
                const previousState = { ...initialState, reports };
                const slice = fromReport.getReports(previousState);

                expect(slice).toEqual(reports);
            })
        });

        describe('get loaded selector', () => {
            it('should change to loaded true', () => {
                const { initialState } = fromReport;
                const previousState = { ...initialState, loaded: true };
                const slice = fromReport.getReportsLoaded(previousState);

                expect(slice).toEqual(true);
            })
        });

        describe('get loading selector', () => {
            it('should change to loading true', () => {
                const { initialState } = fromReport;
                const previousState = { ...initialState, loading: true };
                const slice = fromReport.getReportsLoading(previousState);

                expect(slice).toEqual(true);
            })
        });

    })

});
