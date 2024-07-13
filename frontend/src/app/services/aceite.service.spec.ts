import { TestBed } from '@angular/core/testing';

import { AceiteService } from './aceite.service';

describe('AceiteService', () => {
  let service: AceiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AceiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
