import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private isSearching = new BehaviorSubject<boolean>(false);
  private searchQuery = new BehaviorSubject<string>('');

  public isSearching$ = this.isSearching.asObservable();
  public searchQuery$ = this.searchQuery.asObservable();

  constructor() {}

  updateSearchingStatus(status: boolean) {
    this.isSearching.next(status);
  }

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
