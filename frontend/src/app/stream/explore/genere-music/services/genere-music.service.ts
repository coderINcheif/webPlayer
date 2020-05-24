import { CategoryInterface } from '../../../shared/interfaces/category.interface';
import { CardType } from 'src/app/stream/shared/enums/card.enum';
import { TestDataService } from '../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenereMusicService {
  categories: Array<CategoryInterface>;
  constructor(private testDataService: TestDataService) {
    this.categories = [
      {
        title: 'New releases',
        apiURL: 'category',
        items: [],
      },
      {
        title: 'Popular playlist',
        apiURL: 'genere-music',
        items: [],
      },
    ];
  }

  getTitle(url: string) {
    let title = url.replace(/-/g, ' ');
    title = title.replace(title[0], title[0].toUpperCase());
    return title;
  }

  getItems(): Array<CategoryInterface> {
    const results: Array<CategoryInterface> = [];
    this.categories.forEach((category) => {
      category.items = this.testDataService.getData(category.apiURL);
      results.push(category);
    });
    return results;
  }

  getCardType() {
    return CardType.Playlist;
  }
}
