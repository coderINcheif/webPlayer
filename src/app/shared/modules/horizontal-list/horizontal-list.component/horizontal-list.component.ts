import { PlaylistInterface } from '../../../interfaces/playlist.interface';
import { HorizontalListService } from './services/horizontal-list-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss'],
})
export class HorizontalListComponent implements OnInit {
  items: Array<PlaylistInterface>;
  @Input('count') count?: number = 5;
  @Input('header') header: string;
  @Input('serviceURL') url = 'playlist';

  constructor(private listItems: HorizontalListService) {}

  ngOnInit() {
    this.items = this.listItems.getItems(this.url, this.count);
  }
}
