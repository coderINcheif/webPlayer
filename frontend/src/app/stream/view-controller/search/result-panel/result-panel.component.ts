import { floatInTrigger, floatOutTrigger } from './result.animation';
import { SyncService } from '../shared/services/sync.service';
import { SearchResultInterface } from '../shared/interfaces/search-result.interface';
import { SearchService } from '../shared/services/search.service';
import { Component, OnInit, Input } from '@angular/core';

export interface NoResultTemplateData {
  icon: string;
  heading: string;
  text: string;
}

@Component({
  selector: 'app-view-controller-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.scss'],
  animations: [floatInTrigger, floatOutTrigger],
})
export class ResultPanelComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('visible') visible: boolean;

  results: Array<SearchResultInterface> = [];
  showRecents = true;
  resultsAvailable = false;
  recentSearches: Array<SearchResultInterface> = [];

  noRecent: NoResultTemplateData = {
    icon: 'search',
    heading: 'Search WebPlayer',
    text: 'Find your favorite music and playlist',
  };
  noSearch: NoResultTemplateData = {
    icon: 'error_outline',
    heading: 'No results found',
    text: 'Please check you have right spelling or try different keyword',
  };

  constructor(
    private syncService: SyncService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.syncService.searchQuery$.subscribe((query) => {
      this.results = [];
      if (query === '') {
        this.showRecents = true;
        this.results = this.searchService.getRecentSearches();
      } else {
        this.showRecents = false;
        this.results = this.searchService.getResults(query);
      }
      this.checkResults();
    });
  }

  checkResults() {
    this.results.length === 0
      ? (this.resultsAvailable = false)
      : (this.resultsAvailable = true);
  }
}
