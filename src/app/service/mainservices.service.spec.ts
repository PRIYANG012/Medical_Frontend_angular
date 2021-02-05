import { TestBed } from '@angular/core/testing';

import { MainservicesService } from './mainservices.service';

describe('MainservicesService', () => {
  let service: MainservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
