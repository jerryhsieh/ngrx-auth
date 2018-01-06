import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { hot, cold } from 'jasmine-marbles';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ReportEffects } from './report.effects';
import { AppConfig } from '../../app.config';
import { ReportService } from '../../member/service/report.service';
import * as fromStore from '../../store';

// mocked data and services
const report = {
    id: 1,
    master: 'test',
    image: 'testImg',
    title: 'test title',
    report: 'test report'
};

class ReportServiceSpy {
    getReports = jasmine.createSpy('getReports')
        .and.returnValue(Observable.of([report]))

    getReport = jasmine.createSpy('getReport')
        .and.returnValue(report);

    getReportsFromServer = jasmine.createSpy('getReportsFromServer')
        .and.returnValue(Observable.of({ success: true, payload: [report] }));

}

describe('Report.Effects', () => {
    let effects: ReportEffects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ReportEffects,
                provideMockActions(() => actions),
                { provide: ReportService, useClass: ReportServiceSpy },
                AppConfig
            ]
        });
        effects = TestBed.get(ReportEffects);

    })


    it('should get expected reports', () => {
        const action = new fromStore.getReportAction();
        const action_success = new fromStore.getReportSuccessAction([report]);

        // Refer to 'Writing Marble Tests' for details on '--a-' syntax
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: action_success });

        expect(effects.getReportEffect$).toBeObservable(expected);
    });


});
