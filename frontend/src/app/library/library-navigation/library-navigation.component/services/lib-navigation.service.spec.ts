import { TestBed } from '@angular/core/testing';

import { LibNavigationService } from './lib-navigation.service';

describe('LibNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibNavigationService = TestBed.get(LibNavigationService);
    expect(service).toBeTruthy();
  });
});
