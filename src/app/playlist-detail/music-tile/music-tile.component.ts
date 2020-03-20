import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-tile',
  templateUrl: './music-tile.component.html',
  styleUrls: ['./music-tile.component.scss']
})
export class MusicTileComponent implements OnInit {
  @Input('music') music: MusicInterface;
  constructor() {}

  ngOnInit() {}
}
