import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ReportService } from '../service/report.service';
import { Report } from '../model/report';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    report: Report;
    constructor(
        private route: ActivatedRoute,
        private reportService: ReportService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                let id = +params['id'];
                this.report = this.reportService.getReport(id);
                console.log(this.report);
            });
    }

}
