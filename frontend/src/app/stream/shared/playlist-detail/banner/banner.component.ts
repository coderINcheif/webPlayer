import { mousedownTrigger } from './banner.animation';
import { PlaylistDetailInterface } from '../interfaces/playlist-detail.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-detail-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [mousedownTrigger],
})
export class BannerComponent implements OnInit {
  @Input() details: PlaylistDetailInterface;
  isMousedown = false;

  constructor() {}

  mouseEvent(event: Event) {
    event.stopPropagation();
    this.isMousedown = event.type === 'mousedown' ? true : false;
  }

  ngOnInit() {}
}
