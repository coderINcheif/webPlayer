import { HttpClient } from '@angular/common/http';
import { LibraryPlaylistInterface } from '../../../../shared/interfaces/playlist.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { tap, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaylistService {
  private createPlaylistURL = 'http://localhost:8000/api/playlists/';
  private showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  private newPlaylist = new Subject<LibraryPlaylistInterface>();
  newPlaylist$ = this.newPlaylist.asObservable();

  constructor(private http: HttpClient) {}

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  addNewPlaylist(object: { [key: string]: any }) {
    const playlist = {
      name: object.name,
      cover: object.cover || null,
      id: object.id,
      url: object.url,
    };
    this.newPlaylist.next(playlist);
  }

  createPlaylist(data: string) {
    return this.http.post(this.createPlaylistURL, data);
  }
}
