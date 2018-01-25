//
//
// File name : report.guard.ts 
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, filter, map, switchMap, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as fromStore from '../store';

@Injectable()
export class ReportGuard implements CanActivate, CanActivateChild {

    constructor(
        private store: Store<fromStore.State>
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }


    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getReportsLoaded)
            .pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.getReportAction());
                }
            }),
            filter(loaded => !!loaded),
            take(1)
            );
    }
}
