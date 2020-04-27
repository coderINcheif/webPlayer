import { CardType } from './../../card/card.component/card.component';
import { PlaylistInterface } from '../../../interfaces/playlist.interface';
import { HorizontalListService } from './services/horizontal-list-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('count') count = 5;
  // tslint:disable-next-line: no-input-rename
  @Input('header') header?: string;
  // tslint:disable-next-line: no-input-rename
  @Input('items') items: Array<any>;
  // tslint:disable-next-line: no-input-rename
  @Input('serviceURL') url = 'playlist';
  // tslint:disable-next-line: no-input-rename
  @Input('cardType') cardType;

  cardTypes = CardType;
  constructor(private listItems: HorizontalListService) {}

  ngOnInit() {
    // this.items = this.listItems.getItems(this.url, this.count);
    // this.inputCardType = this.listItems.getCardType(this.url);
  }
}
