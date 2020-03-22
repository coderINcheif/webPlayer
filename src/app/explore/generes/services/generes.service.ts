import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneresService {
  generes: Array<string>;
  constructor() {
    this.generes = [
      'Pop',
      'Bollywood',
      'EDM',
      'Rock',
      'Podcast',
      'Charts',
      'New Releases',
      'Radio',
      'Discover',
      'Romance',
      'Punjabi',
      'Party',
      'K-Pop',
      'Tamil',
      'Mood',
      'Metal',
      'Folk & Acoustic',
      'Country',
      'Travel'
    ];
  }
}
