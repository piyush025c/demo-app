import { TestBed } from '@angular/core/testing';

import { RepsOfMonthService } from './reps-of-month.service';

describe('RepsOfMonthService', () => {
  let service: RepsOfMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepsOfMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
