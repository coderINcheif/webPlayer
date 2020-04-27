import { PlaylistInterface } from '../../../shared/interfaces/playlist.interface';
import { TestDataService } from '../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/category.interface';
import { CardType } from 'src/app/shared/enums/card.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: Array<CategoryInterface>;
  constructor(private testDataService: TestDataService) {
    this.categories = [
      { title: 'Top charts', apiURL: 'category' },
      { title: 'For you', apiURL: 'category' },
      { title: 'Mood', apiURL: 'category' },
      { title: 'Pop for you', apiURL: 'category' },
      { title: 'Popular in Hindi', apiURL: 'category' },
      { title: 'Top artists', apiURL: 'category' },
    ];
  }

  getCategories(): Array<CategoryInterface> {
    const result: Array<CategoryInterface> = [];
    this.categories.forEach((category: CategoryInterface) => {
      category.items = this.testDataService.getData(category.apiURL) as Array<
        PlaylistInterface
      >;
      result.push(category);
    });
    return result;
  }

  getCardType() {
    return CardType.Playlist;
  }
}
