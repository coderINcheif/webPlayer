import { CardType } from './../../shared/enums/card.enum';
import { ArtistInterface } from '../../shared/interfaces/artist.interface';
import { ArtistService } from './services/artist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  cardType: CardType;
  items: Array<ArtistInterface>;
  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.cardType = this.artistService.getCardType();
    this.items = this.artistService.getItems();
  }
}
