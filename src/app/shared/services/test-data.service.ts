import { PlaylistDetailInterface } from './../../playlist-detail/interfaces/playlist-detail.interface';
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
  libraryPlaylist: PlaylistInterface;
  playlistDetail: PlaylistDetailInterface;
  itemMap: { [key: string]: any };
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
    this.libraryPlaylist = {
      title: 'My Playlist',
      created_by: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: null,
      cover: 'assets/images/myPlaylist.jpeg',
    };
    this.playlistDetail = {
      title: 'Test Playlist',
      created_by: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: [this.artist, this.artist, this.artist, this.artist],
      cover: 'assets/images/7_rings.png',
      songs: 7,
      tracks: this.getTracks(7),
      primaryColor: '160, 126, 138',
    };
    this.itemMap = {
      playlist: this.playlist,
      'my-playlist': this.libraryPlaylist,
      artist: this.artist,
      track: this.track,
      'playlist-detail': this.playlistDetail,
    };
  }

  getData(url: string) {
    return this.itemMap[url];
  }

  getTracks(songs: number) {
    const tracks = [];
    for (let i = 0; i < songs; i++) {
      tracks.push(this.track);
    }
    return tracks;
  }
}
