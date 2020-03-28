import { ActionInterface } from './../../../interfaces/action.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-tile',
  templateUrl: './action-tile.component.html',
  styleUrls: ['./action-tile.component.scss']
})
export class ActionTileComponent implements OnInit {
  @Input('action') action: ActionInterface;

  constructor() {}

  ngOnInit() {}

  onClick(event: Event) {
    event.stopPropagation();
  }
}
