import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ShareModule } from '../../share.module';
import { AppConfig } from '../../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Report } from '../model/report';
import { ReportService } from '../service/report.service';

import { MemberComponent } from './member.component';

describe('MemberComponent', () => {
    let component: MemberComponent;
    let fixture: ComponentFixture<MemberComponent>;
    let reportService: ReportService;

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
    }

    class RouterStub {
        navigateByUrl(url: string) { return url; }
    }


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule],
            declarations: [MemberComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ReportService, useClass: ReportServiceSpy },
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
