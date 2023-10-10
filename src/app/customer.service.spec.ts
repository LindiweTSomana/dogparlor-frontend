import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService], // Add CustomerService to the providers array
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


