import { TestBed } from '@angular/core/testing';

import { GeneresService } from './generes.service';

describe('GeneresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneresService = TestBed.get(GeneresService);
    expect(service).toBeTruthy();
  });
});
