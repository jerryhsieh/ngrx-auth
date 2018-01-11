//
//
// File name : report.guard.spec.ts 
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { TestBed, async, inject } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';

import { ReportGuard } from './report.guard';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromStore from '../store';
import { Report } from '../models';


fdescribe('ReportGuard', () => {
    let guard: ReportGuard;
    let storeSpy = jasmine.createSpyObj('storeSpy', ['dispatch', 'subscribe', 'select']);
    let mockSnapshot = jasmine.createSpyObj("RouterStateSnapshot", ['toString']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers:
            [
                ReportGuard,
                { provide: RouterStateSnapshot, useValue: mockSnapshot },
                { provide: Store, useValue: storeSpy }

            ]
        });
        guard = TestBed.get(ReportGuard);
    }));

    describe('should check guard functions', () => {
        it('should check checkStore', () => {
            let store = TestBed.get(Store);
            const expected = cold('(a|)', { a: true });

            store.select.and.returnValues('fromStore.getReportsLoaded');
            store.select = () => of(true);
            expect(guard.checkStore()).toBeObservable(expected);

        });

        it('should check checkStore if no report loaded', () => {
            let store = TestBed.get(Store);
            const expected = cold('(a|)', { a: true });

            store.select.and.returnValues('fromStore.getReportsLoaded');
            store.select = () => of(false);

            expect(store.dispatch).toHaveBeenCalled();

        });


        it('should check canActivate', () => {
            let store = TestBed.get(Store);
            const expected = cold('(a|)', { a: true });

            store.select.and.returnValues('fromStore.getReportsLoaded');
            store.select = () => of(true);

            expect(guard.canActivate(new ActivatedRouteSnapshot, mockSnapshot)).toBeObservable(expected);
        })

    })
});
