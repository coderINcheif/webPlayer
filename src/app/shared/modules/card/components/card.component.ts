import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() music: MusicInterface;

  constructor() {}

  ngOnInit() {}
}
