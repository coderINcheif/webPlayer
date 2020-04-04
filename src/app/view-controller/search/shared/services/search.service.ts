import { SearchResultInterface } from './../interfaces/search-result.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  results: Array<SearchResultInterface>;
  recentSearches: Array<SearchResultInterface>;
  sample = {
    title: 'Test Playlist',
    type: 'Playlist',
    id: 'some-random-id',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png',
  };
  sample2 = {
    title: 'Test Playlist',
    type: 'Song',
    id: 'some-random-id',
    cover:
      'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png',
    artists: [
      {
        name: 'Himanshu Pandey',
      },
      {
        name: 'Random Person',
      },
      {
        name: 'John Doe',
      },
      {
        name: 'Pandey Himanshu',
      },
    ],
  };

  constructor() {}

  getResults(query: string) {
    if (query.length === 1) {
      this.results = [
        this.sample,
        this.sample2,
        this.sample,
        this.sample2,
        this.sample2,
        this.sample2,
        this.sample2,
        this.sample2,
      ];
    } else if (query.length === 2) {
      this.results = [
        this.sample,
        this.sample2,
        this.sample,
        this.sample2,
        this.sample2,
      ];
    } else if (query.length === 3) {
      this.results = [this.sample, this.sample2, this.sample2];
    } else if (query.length > 10) {
      this.results = [];
    } else {
      this.results = [this.sample2];
    }
    return this.results;
  }

  getRecentSearches() {
    return [];
    this.recentSearches = [this.sample, this.sample2];
    return this.recentSearches;
  }
}
