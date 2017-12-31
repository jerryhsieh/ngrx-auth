import { TestBed, inject, async } from '@angular/core/testing';

import { ReportService } from './report.service';
import { AppConfig } from '../../app.config';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ReportService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                ReportService,
                AppConfig
            ]
        });
    });

    it('should be created', inject([ReportService], (service: ReportService) => {
        expect(service).toBeTruthy();
    }));

    it(`should issue a request`,
        // 1. declare as async test since the HttpClient works with Observables
        async(
            // 2. inject HttpClient and HttpTestingController into the test
            inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
                // 3. send a simple request
                http.get('http://localhost:3000/api/report').subscribe();

                // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
                // here two, it's significantly less boilerplate code needed to verify an expected request
                backend.expectOne({
                    url: 'http://localhost:3000/api/report',
                    method: 'GET'
                });
            })
        )
    );


});
