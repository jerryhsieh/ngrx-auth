//
//
// File name : startup.service.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//
import { Injectable, Injector } from '@angular/core';

import { UtilsService } from '../helper/utils.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store';

import { filter } from 'rxjs/operators/filter';

@Injectable()
export class StartupService {

    constructor(
        private utils: UtilsService,
        private store: Store<fromRoot.State>
    ) { }

    load(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.utils.isTokenExpired()) {                     // token not expired
                this.store.dispatch(new fromRoot.getUserAction());
                return this.store.select(fromRoot.getIsLogin)
                    .pipe(
                    filter(status => status),
                )
                    .subscribe(res => {
                        if (res) {
                            setInterval(() => {
                                this.checkStatus();
                            }, 1000 * 60 * 5);                    // check curren status every 5 min
                        }
                        resolve(res);
                    }, err => {
                        console.log(err);
                        reject(err);
                    })
            } else {
                resolve('no token or token expired');
            }

        })
    }

    checkStatus() {
        if (this.utils.isTokenExpired()) {
            this.store.dispatch(new fromRoot.LogoutAction());
            this.store.dispatch(new fromRoot.Go({ path: ['/'] }));
            console.log('logout due to token expired');
        }
    }

}
