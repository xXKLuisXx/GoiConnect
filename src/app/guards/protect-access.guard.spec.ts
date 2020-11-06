import { TestBed } from '@angular/core/testing';

import { ProtectAccessGuard } from './protect-access.guard';

describe('ProtectAccessGuard', () => {
  let guard: ProtectAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
