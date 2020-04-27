import { TestBed } from '@angular/core/testing';

import { CreatePlaylistService } from './create-playlist.service';

describe('CreatePlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePlaylistService = TestBed.inject(
      CreatePlaylistService
    );
    expect(service).toBeTruthy();
  });
});
