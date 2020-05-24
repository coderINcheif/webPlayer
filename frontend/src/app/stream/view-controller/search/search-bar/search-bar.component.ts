import { SyncService } from '../shared/services/sync.service';
import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-controller-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input: ElementRef;

  isSearching = false;
  constructor(private syncService: SyncService) {}

  ngOnInit() {
    this.syncService.isSearching$.subscribe((status) => {
      this.isSearching = status;
      if (!this.isSearching) {
        this.clearSearch(false);
      }
    });
  }

  ngOnDestroy() {
    this.clearSearch();
  }

  clearSearch(broadcastStatus = true) {
    this.isSearching = false;
    this.syncService.updateSearchQuery('');
    this.input.nativeElement.value = '';
    this.input.nativeElement.blur();
    if (broadcastStatus) {
      this.syncService.updateSearchingStatus(false);
    }
  }

  updateSearchingStatus(status: boolean) {
    this.isSearching = status;
    this.syncService.updateSearchingStatus(status);
  }

  updateQuery(query: string) {
    this.syncService.updateSearchQuery(query);
  }
}
