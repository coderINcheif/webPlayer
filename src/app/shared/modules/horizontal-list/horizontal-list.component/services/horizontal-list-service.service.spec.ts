import { TestBed } from '@angular/core/testing';

import { HorizontalListService } from './horizontal-list-service.service';

describe('HorizontalListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorizontalListService = TestBed.get(HorizontalListService);
    expect(service).toBeTruthy();
  });
});
