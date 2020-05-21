import { CategoriesService } from './services/categories.service';
import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from '../../shared/interfaces/category.interface';
import { CardType } from 'src/app/shared/enums/card.enum';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  categories: Array<CategoryInterface>;
  cardType: CardType;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.cardType = this.categoriesService.getCardType();
  }
}
