import { TestBed, inject } from '@angular/core/testing';

import { ReportSelectService } from './report-select.service';

describe('ReportSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportSelectService]
    });
  });

  it('should be created', inject([ReportSelectService], (service: ReportSelectService) => {
    expect(service).toBeTruthy();
  }));
});
