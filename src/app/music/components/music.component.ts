import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  listHeader: string;
  constructor() {
    this.listHeader = 'Trending';
  }

  ngOnInit() {}
}
