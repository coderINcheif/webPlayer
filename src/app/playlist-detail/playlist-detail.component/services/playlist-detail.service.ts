import { TestDataService } from '../../../shared/services/test-data.service';
import { PlaylistDetailInterface } from '../../interfaces/playlist-detail.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistDetailService {
  playlist: PlaylistDetailInterface;
  constructor(private testDataService: TestDataService) {
    const playlist = testDataService.playlist as any;
    const songs = 'songs';
    const tracks = 'tracks';
    const primaryColor = 'primaryColor';
    playlist[songs] = 7;
    playlist[tracks] = this.getTracks(playlist.songs);
    playlist[primaryColor] = '160, 126, 138';
    this.playlist = playlist;
  }
  getTracks(songs: number) {
    const tracks = [];
    for (let i = 0; i < songs; i++) {
      tracks.push(this.testDataService.track);
    }
    return tracks;
  }
}
