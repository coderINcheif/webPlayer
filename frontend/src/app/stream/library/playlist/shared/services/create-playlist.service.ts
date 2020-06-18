import { FormErrorHandler } from './../../../../../shared/error-handlers/form.handler';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PlaylistInterface } from '../../../../shared/interfaces/playlist.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreatePlaylistService {
  private createPlaylistURL = 'http://localhost:8000/api/playlists/';
  private showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  private newPlaylist = new Subject<PlaylistInterface>();
  newPlaylist$ = this.newPlaylist.asObservable();

  constructor(
    private http: HttpClient,
    private formErrorHandler: FormErrorHandler
  ) {}

  updateDialogStatus(status: boolean) {
    this.showDialog.next(status);
  }

  createPlaylist(data: string) {
    return this.http.post(this.createPlaylistURL, data);
  }
}
