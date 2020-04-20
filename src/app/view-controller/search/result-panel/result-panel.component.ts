import { NoResultTemplate } from './../shared/interfaces/no-result-template.interface';
import { floatInTrigger, floatOutTrigger } from './result.animation';

import { SyncService } from './../shared/services/sync.service';
import { SearchResultInterface } from './../shared/interfaces/search-result.interface';
import { SearchService, ResultType } from './../shared/services/search.service';
import { Component, OnInit, Input } from '@angular/core';

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
  noResultTemplate: NoResultTemplate;
  public recentSearches: Array<SearchResultInterface> = [];

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
    if (this.results.length === 0) {
      this.resultsAvailable = false;
      this.noResultTemplate = this.searchService.noResultTemplateData(
        this.showRecents ? ResultType.Recents : ResultType.Search
      );
    } else {
      this.resultsAvailable = true;
    }
  }
}
