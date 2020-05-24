import { PlaylistInterface } from '../../../../shared/interfaces/playlist.interface';
import { TestDataService } from '../../../../shared/services/test-data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaylistService {
  private showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  private newPlaylist = new Subject<PlaylistInterface>();
  newPlaylist$ = this.newPlaylist.asObservable();

  constructor(private testDataService: TestDataService) {}

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  createPlaylist(playlistName: string) {
    const newObject = this.testDataService.createLibraryPlaylist(playlistName);
    this.updateDialogStatus(false);
    this.newPlaylist.next(newObject);
  }
}
