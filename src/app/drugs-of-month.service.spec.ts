import { TestBed } from '@angular/core/testing';

import { DrugsOfMonthService } from './drugs-of-month.service';

describe('DrugsOfMonthService', () => {
  let service: DrugsOfMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugsOfMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
