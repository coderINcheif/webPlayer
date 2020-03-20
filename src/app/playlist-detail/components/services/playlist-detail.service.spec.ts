import { TestBed } from '@angular/core/testing';

import { PlaylistDetailService } from './playlist-detail.service';

describe('PlaylistDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistDetailService = TestBed.get(PlaylistDetailService);
    expect(service).toBeTruthy();
  });
});
