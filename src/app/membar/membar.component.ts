//
//
// File name : membar.component.ts 
// Created by: Jerry Hsieh @ 2018-01-13
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
    selector: 'app-membar',
    templateUrl: './membar.component.html',
    styleUrls: ['./membar.component.css']
})
export class MembarComponent implements OnInit {

    login$: Observable<boolean>;
    user$: Observable<string>;
    constructor(
        private store: Store<fromStore.State>
    ) { }

    ngOnInit() {
        this.login$ = this.store.select(fromStore.getIsLogin);
        this.user$ = this.store.select(fromStore.getCurrentUser);
    }

    logout() {
        this.store.dispatch(new fromStore.LogoutAction());
        this.store.dispatch(new fromStore.resetReportAction());
        this.store.dispatch(new fromStore.Go({ path: ['/'] }));
    }



}
