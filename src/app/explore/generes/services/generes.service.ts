import { GenereInterface } from './../../../shared/interfaces/genere.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneresService {
  generes: Array<GenereInterface>;
  constructor() {
    this.generes = [
      { title: 'Pop', url: 'pop' },
      { title: 'Bollywood', url: 'bollywood' },
      { title: 'EDM', url: 'edm' },
      { title: 'Rock', url: 'rock' },
      { title: 'Podcast', url: 'podcast' },
      { title: 'Charts', url: 'charts' },
      { title: 'New Releases', url: 'new-releases' },
      { title: 'Radio', url: 'radio' },
      { title: 'Discover', url: 'discover' },
      { title: 'Romance', url: 'romance' },
      { title: 'Punjabi', url: 'punjabi' },
      { title: 'Party', url: 'party' },
      { title: 'K-Pop', url: 'k-pop' },
      { title: 'Tamil', url: 'tamil' },
      { title: 'Mood', url: 'mood' },
      { title: 'Metal', url: 'metal' },
      { title: 'Folk & Acoustic', url: 'folk' },
      { title: 'Country', url: 'country' },
      { title: 'Travel', url: 'travel' },
    ];
  }
}
