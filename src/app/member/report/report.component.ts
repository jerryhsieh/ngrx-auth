import { Component, OnInit } from '@angular/core';

import { ReportSelectService } from '../service/report-select.service';
import { Report } from '../../models';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    report$: Observable<Report>;
    constructor(
        private reportSelectService: ReportSelectService
    ) { }

    ngOnInit() {
        this.report$ = this.reportSelectService.selected$;
    }

}
