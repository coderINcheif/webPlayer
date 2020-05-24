import { CardType } from '../../../shared/enums/card.enum';
import { TestDataService } from '../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';
import { ArtistInterface } from 'src/app/stream/shared/interfaces/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private testDataService: TestDataService) {}

  getItems(): Array<ArtistInterface> {
    return this.testDataService.getData('library-artist');
  }

  getCardType(): CardType {
    return CardType.Artist;
  }
}
