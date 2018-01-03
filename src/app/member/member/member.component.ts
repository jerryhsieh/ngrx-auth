//
//
// File name : member.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { ReportService } from '../service/report.service';
import { ReportSelectService } from '../service/report-select.service';
import { Report } from '../../models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
    loading: boolean = false;
    reports$: Observable<Report[]>;
    constructor(
        //private reportService: ReportService,
        private reportSelectService: ReportSelectService,
        private store: Store<fromRoot.State>,
        private router: Router
    ) { }

    ngOnInit() {
        //this.loading = true;
        //this.store.dispatch(new fromRoot.getReportAction());
        this.reports$ = this.store.select(fromRoot.getReports)
            .do(reports => {
                if (!reports.length) {
                    this.store.dispatch(new fromRoot.getReportAction())
                }
            })
            .filter(reports => !!reports);
        //this.reports$ = this.reportService.getReports()
    }

    /*
    selectReport(report) {
        console.log('in side select report');
        this.router.navigate(['/member/report/', report.id]);
    }
    */

}
