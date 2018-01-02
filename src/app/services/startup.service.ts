//
//
// File name : startup.service.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../users/service/user.service';
import { UtilsService } from '../helper/utils.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../store';

@Injectable()
export class StartupService {

    constructor(
        private injector: Injector,
        private userService: UserService,
        private utils: UtilsService,
        private store: Store<fromRoot.State>
    ) { }

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('in startup');
            if (!this.utils.isTokenExpired()) {
                this.store.dispatch(new fromRoot.getUserAction());
            }

            return this.userService.checkUser()
                .subscribe(res => {
                    if (res) {
                        console.log('current state is ', res);
                        setInterval(() => {
                            this.checkStatus();
                        }, 1000 * 60 * 5);                    // check curren status every 5 min
                    }
                    resolve(res)
                }, err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    checkStatus() {
        if (this.utils.isTokenExpired()) {
            const router = this.injector.get(Router);
            router.navigate(['/']);                     // route back to home page
            this.userService.logout();
            console.log('logout due to token expired');
        }
    }

}
