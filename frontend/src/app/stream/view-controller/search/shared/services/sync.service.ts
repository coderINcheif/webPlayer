import { OverlayService } from '../../../../shared/services/overlay-service/overlay.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  private isSearching = new BehaviorSubject<boolean>(false);
  private searchQuery = new BehaviorSubject<string>('');

  public isSearching$ = this.isSearching.asObservable();
  public searchQuery$ = this.searchQuery.asObservable();

  constructor(private overlayService: OverlayService) {
    this.listenOverlayService();
  }

  updateSearchingStatus(
    status: boolean,
    broadcastOverlayStatus: boolean = true
  ) {
    this.isSearching.next(status);
    if (broadcastOverlayStatus) {
      this.overlayService.updateOverlayStatus(status);
    }
  }

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  private listenOverlayService() {
    this.overlayService.overlayStatus$.subscribe((status) => {
      if (status === false) {
        this.updateSearchingStatus(false, false);
      }
    });
  }
}
