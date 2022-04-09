import { TestBed } from '@angular/core/testing';

import { NavigateAwayGuard } from './navigate-away.guard';

describe('NavigateAwayGuard', () => {
  let guard: NavigateAwayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavigateAwayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
