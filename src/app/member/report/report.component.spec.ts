import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Report } from '../../models';
import { ReportService } from '../service/report.service';
import { ReportSelectService } from '../service/report-select.service';

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from './router-stubs';
import { ReportComponent } from './report.component';

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
        .and.returnValue(Observable.of([report]));

    getReport = jasmine.createSpy('getReport')
        .and.returnValue(Observable.of(report));
}

class ReportSelectServiceSpy {
    select = jasmine.createSpy('select')
        .and.returnValue(report);

    selectedReport = jasmine.createSpy('selectedReport')
        .and.returnValue(Observable.of(report));
}
class RouterStub {
    navigateByUrl(url: string) { return url; }
}

// describe start
describe('ReportComponent', () => {
    let component: ReportComponent;
    let fixture: ComponentFixture<ReportComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportComponent],
            providers: [
                { provide: ReportService, useClass: ReportServiceSpy },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub },
                { provide: ReportSelectService, useClass: ReportSelectServiceSpy },
                { provide: Router, useClass: RouterStub }
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
