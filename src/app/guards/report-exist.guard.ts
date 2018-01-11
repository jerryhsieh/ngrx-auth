//
//
// File name : report-exist.guard.ts 
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, map, switchMap, filter, take } from 'rxjs/operators';

import * as fromStore from '../store';
import { Report } from '../models';

@Injectable()
export class ReportExistGuard implements CanActivate {
    constructor(
        private store: Store<fromStore.State>
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => {
                const id = +route.params.rptId;
                return this.hasReport(id);
            })
        );
    }

    hasReport(id: number): Observable<boolean> {
        return this.store.select(fromStore.getReports)
            .pipe(
            map(reports => !!reports.filter(report => report.id === id)[0]),
            take(1)
            )
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getReportsLoaded)
            .pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.getReportAction());
                }
            }),
            filter(loaded => loaded),
            take(1)
            );
    }
}
