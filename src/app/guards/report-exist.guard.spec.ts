import { TestBed, async, inject } from '@angular/core/testing';

import { ReportExistGuard } from './report-exist.guard';

describe('ReportExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportExistGuard]
    });
  });

  it('should ...', inject([ReportExistGuard], (guard: ReportExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
