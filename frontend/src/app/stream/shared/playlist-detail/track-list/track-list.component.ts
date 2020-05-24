import { MusicInterface } from 'src/app/stream/shared/interfaces/music.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-detail-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input('track-list') trackList: Array<MusicInterface>;

  constructor() {}

  ngOnInit() {}
}
