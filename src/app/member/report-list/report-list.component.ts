//
//
// File name : report-list.component.ts
// Created by: Jerry Hsieh @ 2018-01-03
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Report } from '../../models';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportListComponent implements OnInit {

    reports$: Observable<Report[]>;
    loading$: Observable<boolean>;
    constructor(
        private store: Store<fromStore.State>,
    ) { }

    ngOnInit() {
        this.reports$ = this.store.select(fromStore.getReports);
        this.loading$ = this.store.select(fromStore.getReportsLoading);
    }
    onClick(report: Report) {
        this.store.dispatch(new fromStore.Go({ path: ['/member/report', report.id] }));
    }
}
