//
//
// File name : report-select.service.ts
// Created by: Jerry Hsieh @ 2018-01-03
//
// Copyright (C) 2018 by Jerry Hsieh. All rights reserved
//

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Report } from '../../models';

@Injectable()
export class ReportSelectService {

    private selected$: BehaviorSubject<Report> = new BehaviorSubject(null);

    //public selected$ = this._selected.filter(report => !!report);   // !! cast to boolean
    constructor() { }

    select(report: Report) {
        this.selected$.next(report);
    }

    selectedReport(): BehaviorSubject<Report> {
        return this.selected$;
    }

}
