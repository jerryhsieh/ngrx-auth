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

@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportListComponent implements OnInit {

    @Input()
    reports: Report[];
    constructor(
        private router: Router,
        private reportSelectService: ReportSelectService
    ) { }

    ngOnInit() {

    }
    onClick(report) {
        this.reportSelectService.select(report);
        this.router.navigate(['/member/report'])
    }
}
