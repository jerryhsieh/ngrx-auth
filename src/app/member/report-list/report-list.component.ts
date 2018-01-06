//
//
// File name : report-list.component.ts
// Created by: Jerry Hsieh @ 2018-01-03
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//


import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Report } from '../../models';
import { ReportSelectService } from '../service/report-select.service';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

    reports$: Observable<Report[]>;
    constructor(
        private store: Store<fromStore.State>,
        private router: Router,
        private reportSelectService: ReportSelectService
    ) { }

    ngOnInit() {
        this.reports$ = this.store.select(fromStore.getReports);
    }
    onClick(report: Report) {
        this.reportSelectService.select(report);
        //this.router.navigate(['/member/report', report.id]);
        this.store.dispatch(new fromStore.Go({ path: ['/member/report', report.id] }));
    }
}
