//
//
// File name : report.actions.spec.ts
// Created by: Jerry Hsieh @ 2018-01-07
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import * as fromReport from './report.actions';

import { Report } from '../../models';

describe('Report Actions', () => {
    describe('Get Report Actions', () => {
        describe('Get Report', () => {
            it('should create an action', () => {
                const action = new fromReport.getReportAction();

                expect({ ...action }).toEqual({
                    type: fromReport.GETREPORT
                })
            })
        });

        describe('Get Report Fail', () => {
            it('should create an action', () => {
                const payload = { message: 'Get Report Error' };
                const action = new fromReport.getReportFailAction(payload);

                expect({ ...action }).toEqual({
                    type: fromReport.GETREPORT_FAIL,
                    payload
                })
            })
        });

        describe('Get Report Success', () => {
            it('should create an action', () => {
                const payload: Report[] = [{ id: 1, master: 'test', image: 'test image', title: 'test title', report: 'test report' }];
                const action = new fromReport.getReportSuccessAction(payload);

                expect({ ...action }).toEqual({
                    type: fromReport.GETREPORT_SUCCESS,
                    payload
                })
            })
        })


    });



});
