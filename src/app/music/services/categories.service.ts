import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Array<string>;
  constructor() {
    this.categories = [
      'Top charts',
      'For you',
      'Mood',
      'Pop for you',
      'Popular in Hindi',
      'Top artists'
    ];
  }
}
