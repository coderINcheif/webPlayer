import { SearchResultInterface } from './../shared/interfaces/search-result.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss']
})
export class ResultTileComponent implements OnInit {
  @Input('result') result: Array<SearchResultInterface>;

  constructor() {}

  ngOnInit() {}
}
