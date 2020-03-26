import { OverlayService } from './../../../../shared/services/overlay-service/overlay.service';
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

  constructor(private overlayService: OverlayService) {}

  updateSearchingStatus(status: boolean) {
    this.overlayService.updateOverlayStatus(status);
    this.isSearching.next(status);
  }

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
