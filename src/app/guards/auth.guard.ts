//
//
// File name : auth.guard.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRoot from '../store';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    loginStatus: boolean;
    constructor(
        private store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getIsLogin)
            .subscribe(res => {
                this.loginStatus = res;
            })
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let url: string = state.url;
        return (this.checkLogin(url));
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return (this.checkLogin(url));
    }

    checkLogin(url: string): boolean {
        if (this.loginStatus) return true;

        this.store.dispatch(new fromRoot.Go({ path: ['/users/login'] }));
        return false;
    }

}
