import { TestBed } from '@angular/core/testing';

import { ArfamedService } from './arfamed.service';

describe('ArfamedService', () => {
  let service: ArfamedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArfamedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
