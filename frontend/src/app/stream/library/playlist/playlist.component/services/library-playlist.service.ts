import { HttpClient } from '@angular/common/http';
import { CardType } from 'src/app/stream/shared/enums/card.enum';
import { TestDataService } from '../../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryPlaylistService {
  libraryPlaylistURL = 'http://localhost:8000/api/playlists/';
  constructor(
    private http: HttpClient,
    private testDataService: TestDataService
  ) {}

  getItems() {
    return this.http.get(this.libraryPlaylistURL);
  }

  getCardType() {
    return CardType.Playlist;
  }
}
