//
//
// File name : member.component.ts
// Created by: Jerry Hsieh @ 2017-12-26
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Component, OnInit } from '@angular/core';

//import { ReportService } from '../service/report.service';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
    constructor(
        //private reportService: ReportService,
    ) { }

    ngOnInit() {
        //this.reports$ = this.reportService.getReports();
    }

    /*
    selectReport(report) {
        console.log('in side select report');
        this.router.navigate(['/member/report/', report.id]);
    }
    */

}
