import { ArtistInterface } from './../interfaces/artist.interface';
import { MusicInterface } from './../interfaces/music.interface';
import { PlaylistInterface } from './../interfaces/playlist.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  playlist: PlaylistInterface;
  track: MusicInterface;
  artist: ArtistInterface;
  constructor() {
    this.artist = {
      name: 'Random Person',
    };
    this.playlist = {
      title: 'Test Playlist',
      created_by: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: [this.artist, this.artist, this.artist, this.artist],
      cover: 'assets/images/7_rings.png',
    };
    this.track = {
      title: 'Test Music',
      length: '3:45',
      artists: [
        {
          name: 'Himanshu Pandey',
        },
        {
          name: 'Pandey Himanshu',
        },
      ],
      releaseDate: '30th Feb 2020',
      cover: 'assets/images/7_rings.png',
    };
  }
}
