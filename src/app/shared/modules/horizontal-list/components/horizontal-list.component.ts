import { PlaylistInterface } from './../../../interfaces/playlist.interface';
import { HorizontalListService } from './services/horizontal-list-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  items: Array<PlaylistInterface>;
  @Input('numberOfItems') numberOfItems?: number;
  @Input('header') header: string;

  constructor(private listItems: HorizontalListService) {}

  ngOnInit() {
    this.items = this.listItems.items;
    if (this.numberOfItems) {
      for (let i = 0; i < this.numberOfItems; i++) {
        this.items = this.items.concat(this.items);
      }
    }
  }
}
