import { TestBed } from '@angular/core/testing';

import { BaseUserService } from './base-user.service';

describe('BaseUserService', () => {
  let service: BaseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
