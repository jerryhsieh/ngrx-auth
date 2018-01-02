//
//
// File name : report.service.ts
// Created by: Jerry Hsieh @ 2017-12-28
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AppConfig } from '../../app.config';
import { Report, Response } from '../../models';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ReportService {

    reports: Report[] = [];
    constructor(
        private appConfig: AppConfig,
        private http: HttpClient
    ) {
        this.getReports();
    }


    getReportsFromServer(): Observable<Response> {
        return this.http.get<Response>(this.appConfig.apiUrl + '/report');
    }

    getReports(): Observable<Report[]> {
        if (this.reports.length === 0) {
            return this.getReportsFromServer()
                .map(res => {
                    this.reports = res.payload;
                    return res.payload;
                })
        } else {
            return of(this.reports);
        }
    }

    getReport(id: number): Report {
        return this.reports.filter(rpt => rpt.id === id)[0];
    }

}
