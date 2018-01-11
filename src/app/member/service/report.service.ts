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

    constructor(
        private appConfig: AppConfig,
        private http: HttpClient
    ) { }


    getReportsFromServer(): Observable<Response> {
        return this.http.get<Response>(this.appConfig.apiUrl + '/reports');
    }
}
