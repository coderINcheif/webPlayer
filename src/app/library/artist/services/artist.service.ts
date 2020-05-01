import { ArtistInterface } from './../../../shared/interfaces/artist.interface';
import { CardType } from './../../../shared/enums/card.enum';
import { TestDataService } from './../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private testDataService: TestDataService) {}

  getItems(): Array<ArtistInterface> {
    return this.testDataService.getData('library-artist');
  }

  getCardType() {
    return CardType.Artist;
  }
}
