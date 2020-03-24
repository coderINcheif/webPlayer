import { SearchResultInterface } from './../interfaces/search-result.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results: Array<SearchResultInterface>;

  constructor() {}

  getResults(query: string) {
    this.results = [
      {
        title: 'Test Playlist',
        type: 'Playlist',
        id: 'some-random-id',
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      },
      {
        title: 'Test Playlist',
        type: 'Music',
        id: 'some-random-id',
        artists: [
          {
            name: 'Himanshu Pandey'
          },
          {
            name: 'Random Person'
          }
        ],
        cover:
          'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png'
      }
    ];
    return this.results;
  }
}
