import { TestBed } from '@angular/core/testing';

import { GenereMusicService } from './genere-music.service';

describe('GenereMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenereMusicService = TestBed.get(GenereMusicService);
    expect(service).toBeTruthy();
  });
});
