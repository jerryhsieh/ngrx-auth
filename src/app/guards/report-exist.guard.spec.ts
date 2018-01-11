//
//
// File name : report-exist.guard.spec.ts
// Created by: Jerry Hsieh @ 2018-01-09
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';

import { ReportExistGuard } from './report-exist.guard';
import { ReportService } from '../member/service/report.service';
import { AppConfig } from '../app.config';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromStore from '../store';
import { Report } from '../models';


describe('ReportExistGuard', () => {
    let guard: ReportExistGuard;
    let storeSpy = jasmine.createSpyObj('storeSpy', ['dispatch', 'subscribe', 'select']);
    let mockSnapshot = jasmine.createSpyObj("RouterStateSnapshot", ['toString']);
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            providers: [
                ReportExistGuard,
                { provide: ActivatedRouteSnapshot, useValue: { params: { 'rptId': '2' } } },
                { provide: RouterStateSnapshot, useValue: mockSnapshot },
                { provide: Store, useValue: storeSpy }
            ]
        });

        guard = TestBed.get(ReportExistGuard);
    }))

    describe('should check guard functions', () => {

        it('should check checkStore if report already loaded', () => {
            let store = TestBed.get(Store);
            const expected = cold('(a|)', { a: true });

            store.select.and.returnValues('fromStore.getReportsLoaded');
            store.select = () => of(true);
            expect(guard.checkStore()).toBeObservable(expected);

        });

        it('should check checkStore if no report loaded', () => {
            let store = TestBed.get(Store);

            store.select.and.returnValues('fromStore.getReportsLoaded');
            store.select = () => of(false);

            guard.checkStore()
                .subscribe(res => {
                    expect(store.dispatch).toHaveBeenCalled();          // it should call dispatch to get reports
                });
        });


        it('should check hasReport', () => {
            let store = TestBed.get(Store);
            let route = TestBed.get(ActivatedRouteSnapshot);
            let mockReport: Report = { id: 2, master: 'test', image: 'test', title: 'test', report: 'test' ;}
            const expected = cold('(a|)', { a: true });

            store.select = () => of([mockReport]);
            expect(guard.hasReport(+route.params.rptId)).toBeObservable(expected);
        })

        it('should check canActivate', () => {
            let store = TestBed.get(Store);
            let route = TestBed.get(ActivatedRouteSnapshot);
            let mockReport: Report = { id: 2, master: 'test', image: 'test', title: 'test', report: 'test' };
            const expected = cold('(a|)', { a: true });

            store.select.and.returnValues('fromStore.getReportsLoaded', 'fromStore.getReports');
            store.select = () => of(true);
            store.select = () => of([mockReport]);

            expect(route.params.rptId).toEqual('2');
            guard.canActivate(new ActivatedRouteSnapshot, mockSnapshot)
                .subscribe(res => {
                    console.log(route);
                })

            //expect(guard.canActivate(new ActivatedRouteSnapshot, mockSnapshot)).toBeObservable(expected);
        })

    });

});
