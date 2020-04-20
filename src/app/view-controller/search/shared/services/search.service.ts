import { NoResultTemplate } from './../interfaces/no-result-template.interface';
import { TestDataService } from './../../../../shared/services/test-data.service';
import { SearchResultInterface } from './../interfaces/search-result.interface';
import { Injectable } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

export enum ResultType {
  Recents,
  Search,
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  results: Array<SearchResultInterface>;
  recentSearches: Array<SearchResultInterface>;

  constructor(private testDataService: TestDataService) {}

  getResults(query: string) {
    if (query.length === 1) {
      this.results = [
        this.testDataService.searchSample,
        this.testDataService.searchSample2,
        this.testDataService.searchSample,
        this.testDataService.searchSample2,
        this.testDataService.searchSample2,
        this.testDataService.searchSample2,
        this.testDataService.searchSample2,
        this.testDataService.searchSample2,
      ];
    } else if (query.length === 2) {
      this.results = [
        this.testDataService.searchSample,
        this.testDataService.searchSample2,
        this.testDataService.searchSample,
        this.testDataService.searchSample2,
        this.testDataService.searchSample2,
      ];
    } else if (query.length === 3) {
      this.results = [
        this.testDataService.searchSample,
        this.testDataService.searchSample,
        this.testDataService.searchSample2,
      ];
    } else if (query.length > 10) {
      this.results = [];
    } else {
      this.results = [this.testDataService.searchSample2];
    }
    return this.results;
  }

  getRecentSearches() {
    return [];
    this.recentSearches = [
      this.testDataService.searchSample,
      this.testDataService.searchSample2,
      this.testDataService.searchSample,
      this.testDataService.searchSample2,
    ];
    return this.recentSearches;
  }

  noResultTemplateData(resultType: ResultType): NoResultTemplate {
    const data: NoResultTemplate = { icon: '', heading: '', text: '' };
    if (resultType === ResultType.Recents) {
      data.icon = 'search';
      data.heading = 'Search WebPlayer';
      data.text = 'Find your favorite music and playlist';
    } else if (resultType === ResultType.Search) {
      data.icon = 'error_outline';
      data.heading = 'No results found';
      data.text =
        'Please check you have right spelling or try different keyword';
    }
    return data;
  }
}
