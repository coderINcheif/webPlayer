import { CardType } from 'src/app/shared/enums/card.enum';
import { TestDataService } from './../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenereMusicService {
  categories: Array<{ [key: string]: any }>;
  constructor(private testDataService: TestDataService) {
    this.categories = [
      {
        title: 'New releases',
        apiURL: 'category',
      },
      {
        title: 'Popular playlist',
        apiURL: 'genere-music',
      },
    ];
  }

  getTitle(url: string) {
    let title = url.replace(/-/g, ' ');
    title = title.replace(title[0], title[0].toUpperCase());
    return title;
  }

  getItems() {
    const results: Array<{ [key: string]: any }> = [];
    this.categories.forEach((category) => {
      // tslint:disable-next-line: no-string-literal
      category['items'] = this.testDataService.getData(category.apiURL);
      results.push(category);
    });
    return results;
  }

  getCardType() {
    return CardType.Playlist;
  }
}
