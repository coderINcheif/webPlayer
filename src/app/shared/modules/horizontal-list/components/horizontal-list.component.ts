import { HorizontalListService } from './services/horizontal-list-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { MusicInterface } from 'src/app/shared/interfaces/music.interface';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {
  items: Array<MusicInterface>;
  @Input() header: string;

  constructor(listItems: HorizontalListService) {
    this.items = listItems.items;
  }

  ngOnInit() {}
}
