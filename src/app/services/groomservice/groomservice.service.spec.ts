import { TestBed } from '@angular/core/testing';

import { GroomserviceService } from './groomservice.service';

describe('GroomserviceService', () => {
  let service: GroomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
