import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { ReportService } from '../service/report.service';
import { Report } from '../../models';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    report$: Observable<Report>;
    constructor(
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>,
        //private reportService: ReportService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                let id = +params['id'];
                //this.report = this.reportService.getReport(id);
                //console.log(this.report);
                this.store.dispatch(new fromRoot.getReportIdAction(id));
                this.report$ = this.store.select(fromRoot.getSelectedReport);
            });
    }

}
