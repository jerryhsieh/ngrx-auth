import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListComponent } from './report-list.component';
import { ShareModule } from '../../share.module';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ReportSelectService } from '../service/report-select.service';
// mocked data and services
const report = {
    id: 1,
    master: 'test',
    image: 'testImg',
    title: 'test title',
    report: 'test report'
};
class RouterStub {
    navigateByUrl(url: string) { return url; }
}

class ReportSelectServiceSpy {
    select = jasmine.createSpy('select')
        .and.returnValue(report);

    selectedReport = jasmine.createSpy('selectedReport')
        .and.returnValue(Observable.of(report));
}

describe('ReportListComponent', () => {
    let component: ReportListComponent;
    let fixture: ComponentFixture<ReportListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ShareModule],
            declarations: [ReportListComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ReportSelectService, useClass: ReportSelectServiceSpy },
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
