//
//
// File name : user.service.ts
// Created by: Jerry Hsieh @ 2017-12-25
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { UtilsService, TOKEN } from '../../helper/utils.service';
import { AppConfig } from '../../app.config';

interface Response {
    success: boolean;
    token?: string;
}

@Injectable()
export class UserService {
    loginStatus = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig,
        private utils: UtilsService) { }

    login(loginData): Observable<boolean> {
        let username = loginData.username.trim();
        let password = loginData.password.trim();
        return this.http.post(this.appConfig.apiUrl + '/users/authenticate', { username: loginData.username, password: loginData.password })
            .map((res: Response) => {
                if (res.success) {
                    this.loginStatus.next(true);
                    console.log('check rememberMe', loginData.rememberMe);
                    if (loginData.rememberMe) {
                        this.utils.writeToken(TOKEN, res.token);
                    }
                    console.log('got token', res.token);
                    return true;
                } else {
                    console.log('can not login');
                    return false;
                }
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('client-side error');
                } else {
                    console.log('server-side error');
                }
                return Observable.of(false);
            })
    }

    logout() {
        this.loginStatus.next(false);
        this.utils.removeToken(TOKEN);
    }

    getLoginStatus(): BehaviorSubject<boolean> {
        return this.loginStatus;
    }

    // when startup
    checkUser(): Observable<boolean> {
        if (!this.utils.isTokenExpired(TOKEN)) {
            this.loginStatus.next(true);
            return Observable.of(true);
        } else {
            console.log('no token or token is expired');
            this.utils.removeToken(TOKEN);
            return Observable.of(false);
        }
    }
}
