//
//
// File name : member.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Report } from '../model/report';
import { ReportService } from '../service/report.service';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

    loading: boolean = false;
    reports: Report[];
    constructor(
        private reportService: ReportService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loading = true;
        this.reportService.getReports()
            .subscribe(res => {
                this.reports = res;
                console.log(res);
                this.loading = false;
            }, err => {
                console.log(err);
            })
    }

    onClick(report) {
        this.router.navigate(['/member/report/', report.id]);
    }
}
