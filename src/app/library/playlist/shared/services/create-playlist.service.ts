import { TestDataService } from './../../../../shared/services/test-data.service';
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

  constructor(private testDataService: TestDataService) {}

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  updateRefreshStatus(status: boolean) {
    this.refresh.next(status);
  }

  createPlaylist(playlistName: string) {
    this.testDataService.createLibraryPlaylist(playlistName);
    this.updateDialogStatus(false);
    this.updateRefreshStatus(true);
  }
}
