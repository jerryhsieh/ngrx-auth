import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ShareModule } from '../../share.module';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Report } from '../../models';
import { ReportService } from '../service/report.service';
import { ReportSelectService } from '../service/report-select.service';

import { MemberComponent } from './member.component';
import { ReportListComponent } from '../report-list/report-list.component';
import { Store } from '@ngrx/store';

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
}

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

class ReportSelectServiceSpy {
    select = jasmine.createSpy('select')
        .and.returnValue(report);

    selectedReport = jasmine.createSpy('selectedReport')
        .and.returnValue(Observable.of(report));
}
class MockStore {
    public dispatch(obj) {
        console.log('dispatching from the mock store!')
    }
    public select(obj) {
        console.log('selecting from the mock store!');
        return Observable.of([report])
    }
}

// describe
describe('MemberComponent', () => {
    let component: MemberComponent;
    let fixture: ComponentFixture<MemberComponent>;
    let reportService: ReportService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule],
            declarations: [MemberComponent, ReportListComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ReportService, useClass: ReportServiceSpy },
                { provide: ReportSelectService, useClass: ReportSelectServiceSpy },
                { provide: Store, useClass: MockStore },
                AppConfig
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MemberComponent);
        component = fixture.componentInstance;
        reportService = TestBed.get(ReportService);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
