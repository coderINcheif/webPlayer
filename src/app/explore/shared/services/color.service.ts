import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors: Array<string>;
  constructor() {
    this.colors = [
      '149, 225, 211',
      '255, 99, 99',
      '246, 56, 220',
      '255, 215, 0',
      '167, 190, 249',
      '119, 171, 183',
      '163, 247, 191',
      '186, 241, 161',
      '240, 236, 226',
    ];
  }

  getColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
