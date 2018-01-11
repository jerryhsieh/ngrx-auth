//
//
// File name : report.component.ts 
// Created by: Jerry Hsieh @ 2018-01-11
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

//import { ReportSelectService } from '../service/report-select.service';
import { Report } from '../../models';

import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit {

    report$: Observable<Report>;
    constructor(
        //private reportSelectService: ReportSelectService,
        //private router: Router,
        private store: Store<fromStore.State>
    ) { }

    ngOnInit() {
        this.report$ = this.store.select(fromStore.getSelectedReport);
        /*
        this.report$ = this.reportSelectService.selectedReport()
            .pipe(
            tap(report => {
                if (!report) {
                    this.router.navigate(['/member']);
                }
            }),
        )
        */

    }

}
