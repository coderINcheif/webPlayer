import { TestDataService } from '../../../../shared/services/test-data.service';
import { SearchResultInterface } from '../interfaces/search-result.interface';
import { Injectable } from '@angular/core';

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
}
