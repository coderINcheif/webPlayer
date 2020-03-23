import { PlaylistDetailInterface } from './../interfaces/playlist-detail.interface';
import { PlaylistDetailService } from './services/playlist-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: PlaylistDetailInterface;
  constructor(private playlistDetail: PlaylistDetailService) {}

  ngOnInit() {
    this.playlist = this.playlistDetail.playlist;
  }
}
