import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    loginStatus = new BehaviorSubject(false);

    constructor(private http: HttpClient) { }

    login(loginData): Observable<boolean> {
        return this.http.post('http://localhost:3200/api/users/authenticate', { username: loginData.username, password: loginData.password })
            .map(res => {
                if (res.success) {
                    this.loginStatus.next(true);
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

    getLoginStatus(): BehaviorSubject<boolean> {
        return this.loginStatus;
    }

}
