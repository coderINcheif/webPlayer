import { SyncService } from '../shared/services/sync.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-controller-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.scss']
})
export class SearchSheetComponent implements OnInit {
  isSearching = false;
  constructor(private syncService: SyncService) {}

  ngOnInit() {
    this.syncService.isSearching$.subscribe(status => {
      this.isSearching = status;
    });
  }
}
