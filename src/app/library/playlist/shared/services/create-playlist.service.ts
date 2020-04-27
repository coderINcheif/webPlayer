import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaylistService {
  private showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  private refresh = new BehaviorSubject<boolean>(false);
  refresh$ = this.refresh.asObservable();

  constructor() {}

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  refreshPlaylist(status: boolean) {
    this.refresh.next(status);
  }
}
