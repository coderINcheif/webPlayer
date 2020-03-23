import { CategoriesService } from './../services/categories.service';
import { MusicInterface } from 'src/app/shared/interfaces/music.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  categories: Array<string>;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.categories;
  }
}
