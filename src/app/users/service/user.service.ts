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
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

import { UtilsService, TOKEN } from '../../helper/utils.service';
import { AppConfig } from '../../app.config';
import { User, Response } from '../../models';

@Injectable()
export class UserService {
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

}
