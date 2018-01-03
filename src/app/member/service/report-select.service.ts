import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Report } from '../../models';

@Injectable()
export class ReportSelectService {

    private _selected: BehaviorSubject<Report> = new BehaviorSubject(null);

    public selected$ = this._selected.filter(report => !!report);
    constructor() { }

    select(report: Report) {
        this._selected.next(report);
    }

}
