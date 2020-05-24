import { TestBed } from '@angular/core/testing';

import { LibraryPlaylistService } from './library-playlist.service';

describe('LibraryPlaylistService', () => {
  let service: LibraryPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
