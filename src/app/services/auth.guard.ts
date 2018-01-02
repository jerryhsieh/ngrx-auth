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

//import { UserService } from '../users/service/user.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../store';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    loginStatus: boolean;
    constructor(
        //private userService: UserService,
        private store: Store<fromRoot.State>,
        private router: Router) {

        /*
        this.userService.getLoginStatus()
            .subscribe(res => {
                this.loginStatus = res;
            })
        */
        this.store.select(fromRoot.getIsLogin)
            .subscribe(res => {
                console.log('current state is ', res);
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

        this.router.navigate(['/users/login']);
        return false;
    }

}
