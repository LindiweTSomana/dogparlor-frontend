import { TestBed } from '@angular/core/testing';

import { ExtraServiceService } from './extra-service.service';

describe('ExtraServiceService', () => {
  let service: ExtraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
