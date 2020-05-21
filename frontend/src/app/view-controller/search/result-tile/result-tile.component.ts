import { SearchResultInterface } from './../shared/interfaces/search-result.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss'],
})
export class ResultTileComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('result') result: SearchResultInterface;

  constructor() {}

  ngOnInit() {}
}
