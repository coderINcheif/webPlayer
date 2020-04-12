import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { ActionInterface } from '../../../interfaces/action.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  @Input('actions') actions: Array<ActionInterface>;
  @Input('music') music: MusicInterface;

  constructor() {}

  ngOnInit() {}
}
