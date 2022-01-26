import { TestBed } from '@angular/core/testing';

import { MonthYearService } from './month-year.service';

describe('MonthYearService', () => {
  let service: MonthYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
