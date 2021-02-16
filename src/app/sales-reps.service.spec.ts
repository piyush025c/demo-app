import { TestBed } from '@angular/core/testing';

import { SalesRepsService } from './sales-reps.service';

describe('SalesRepsService', () => {
  let service: SalesRepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesRepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
