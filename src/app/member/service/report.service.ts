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
import { Report } from '../model/report';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportService {

    reports: Report[];
    constructor(
        private appConfig: AppConfig,
        private http: HttpClient
    ) { }


    getReports(): Observable<Report[]> {
        return this.http.get<Report[]>(this.appConfig.apiUrl + '/report');
    }
}
