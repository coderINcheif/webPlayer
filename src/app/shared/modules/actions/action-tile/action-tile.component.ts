import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { ActionsService } from './../../../services/actions-service/actions.service';
import { ActionInterface } from './../../../interfaces/action.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-tile',
  templateUrl: './action-tile.component.html',
  styleUrls: ['./action-tile.component.scss']
})
export class ActionTileComponent implements OnInit {
  @Input('action') action: ActionInterface;
  @Input('music') music: MusicInterface;

  constructor(private actionsService: ActionsService) {}

  ngOnInit() {}

  performAction(event: Event) {
    event.stopPropagation();
    if (this.action.title === 'Like' || this.action.title === 'Unlike') {
      this.action = this.actionsService.like(this.action, this.music);
    }
  }
}
