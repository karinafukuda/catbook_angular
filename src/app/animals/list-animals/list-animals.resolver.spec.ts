import { TestBed } from '@angular/core/testing';

import { ListAnimalsResolver } from './list-animals.resolver';

describe('ListAnimalsResolver', () => {
  let resolver: ListAnimalsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListAnimalsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
