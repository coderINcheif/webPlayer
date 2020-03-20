import { PlaylistDetailInterface } from './../interfaces/playlist-detail.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-detail-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() details: PlaylistDetailInterface;
  constructor() {}

  ngOnInit() {}
}
