import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Report } from '../model/report';
import { ReportService } from '../service/report.service';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './router-stubs';
import { ReportComponent } from './report.component';

describe('ReportComponent', () => {
    let component: ReportComponent;
    let fixture: ComponentFixture<ReportComponent>;
    const report = {
        id: 1,
        master: 'test',
        image: 'testImg',
        title: 'test title',
        report: 'test report'
    };

    class ReportServiceSpy {
        getReports = jasmine.createSpy('getReports')
            .and.returnValue(Observable.of([report]));

        getReport = jasmine.createSpy('getReport')
            .and.returnValue(Observable.of(report));
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportComponent],
            providers: [
                { provide: ReportService, useClass: ReportServiceSpy },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
