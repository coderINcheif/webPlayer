import { CardType } from 'src/app/stream/shared/enums/card.enum';
import { TestDataService } from '../../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryPlaylistService {
  constructor(private testDataService: TestDataService) {}

  getItems() {
    return this.testDataService.getData('library-playlist');
  }

  getCardType() {
    return CardType.Playlist;
  }
}
