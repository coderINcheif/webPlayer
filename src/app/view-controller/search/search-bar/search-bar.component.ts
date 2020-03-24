import { SyncService } from '../shared/services/sync.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-view-controller-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  isSearching = false;
  constructor(private syncService: SyncService) {}

  ngOnInit() {
    this.syncService.isSearching$.subscribe(status => {
      this.isSearching = status;
    });
  }

  ngOnDestroy() {
    this.clearSearch();
  }

  clearSearch() {
    this.isSearching = false;
    this.syncService.updateSearchingStatus(false);
    this.syncService.updateSearchQuery('');
  }

  updateSearchingStatus(status: boolean) {
    this.isSearching = status;
    this.syncService.updateSearchingStatus(status);
  }

  updateQuery(query: string) {
    this.syncService.updateSearchQuery(query);
  }
}
