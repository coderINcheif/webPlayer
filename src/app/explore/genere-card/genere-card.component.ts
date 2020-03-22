import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-genere-card',
  templateUrl: './genere-card.component.html',
  styleUrls: ['./genere-card.component.scss']
})
export class GenereCardComponent implements OnInit {
  @Input('genere') genere: string;
  colors: Array<string>;
  constructor() {
    this.colors = [
      '#95E1D3',
      '#FF6363',
      '#F638DC',
      '#FFD700',
      '#A7BEF9',
      '#77ABB7',
      '#A3F7BF',
      '#BAF1A1',
      '#F0ECE2'
    ];
  }

  getFontColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  ngOnInit() {}
}
