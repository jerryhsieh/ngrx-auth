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
import { of } from 'rxjs/observable/of';

import { UtilsService, TOKEN } from '../../helper/utils.service';
import { AppConfig } from '../../app.config';
import { User, Response } from '../../models';

@Injectable()
export class UserService {
    loginStatus = new BehaviorSubject(false);
    currentUser = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
        private appConfig: AppConfig,
        private utils: UtilsService) { }

    loginToServer(loginData): Observable<Response> {
        let username = loginData.username.trim();
        let password = loginData.password.trim();
        return this.http.post<Response>(this.appConfig.apiUrl + '/users/authenticate', { username: username, password: password });
    }

    getUserFromServer(): Observable<string> {
        if (!this.utils.isTokenExpired(TOKEN)) {
            const token = this.utils.getToken(TOKEN);
            return this.http.post(this.appConfig.apiUrl + '/users/currentUser', { 'token': token })
                .map((res: Response) => {
                    if (res.success) {
                        return res.payload;
                    } else {
                        return null;
                    }
                })
        } else {
            return of(null);
        }
    }

    login(loginData): Observable<boolean> {
        return this.loginToServer(loginData)
            .map((res: Response) => {
                if (res.success) {
                    this.loginStatus.next(true);
                    if (loginData.rememberMe) {
                        this.utils.writeToken(TOKEN, res.payload);
                    }
                    this.currentUser.next(loginData.username);          // initial current user
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
                return of(false);
            })
    }

    getUser() {
        this.getUserFromServer()
            .subscribe(res => {
                this.currentUser.next(res);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('client-side error');
                } else {
                    console.log('server-side error');
                }
            })
    }

    logout() {
        this.loginStatus.next(false);
        this.currentUser.next(null);
        this.utils.removeToken(TOKEN);
    }

    getLoginStatus(): Observable<boolean> {
        return this.loginStatus;
    }

    getCurrentUser(): Observable<string> {
        return this.currentUser;
    }


    // when startup
    checkUser(): Observable<boolean> {
        if (!this.utils.isTokenExpired(TOKEN)) {
            this.loginStatus.next(true);
            this.getUser();
            return of(true);
        } else {
            console.log('no token or token is expired');
            this.utils.removeToken(TOKEN);
            return of(false);
        }
    }
}
