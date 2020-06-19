import { SearchResultInterface } from '../../view-controller/search/shared/interfaces/search-result.interface';
import { PlaylistDetailInterface } from '../playlist-detail/interfaces/playlist-detail.interface';
import { ArtistInterface } from '../interfaces/artist.interface';
import { MusicInterface } from '../interfaces/music.interface';
import {
  PlaylistInterface,
  LibraryPlaylistInterface,
} from '../interfaces/playlist.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  playlist: PlaylistInterface;
  track: MusicInterface;
  artist: ArtistInterface;
  libraryPlaylist: LibraryPlaylistInterface;
  playlistDetail: PlaylistDetailInterface;
  searchSample: SearchResultInterface;
  searchSample2: SearchResultInterface;
  createdPlaylist: Array<PlaylistInterface> = [];
  // tslint:disable-next-line: ban-types
  itemMap: { [key: string]: Function };
  constructor() {
    this.artist = {
      name: 'Random Person',
      cover: 'assets/images/aritst.jpeg',
      id: 'random-id',
    };
    this.playlist = {
      name: 'Test Playlist',
      owner: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: [this.artist, this.artist, this.artist, this.artist],
      cover: 'assets/images/7_rings.png',
    };
    this.track = {
      title: 'Test Music',
      length: '3:45',
      artists: [this.artist, this.artist],
      releaseDate: '30th Feb 2020',
      cover: 'assets/images/7_rings.png',
    };
    this.libraryPlaylist = {
      name: 'My Playlist',
      id: 'some-random-id',
      url: 'Himanshu Pandey',
      cover: 'assets/images/myPlaylist.jpeg',
    };
    this.playlistDetail = {
      name: 'Test Playlist',
      owner: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: [this.artist, this.artist, this.artist, this.artist],
      cover: 'assets/images/7_rings.png',
      songs: 7,
      tracks: this.getTracks(7),
      primaryColor: '160, 126, 138',
    };
    this.searchSample = {
      title: 'Test Playlist',
      type: 'Playlist',
      id: 'some-random-id',
      cover: 'assets/images/7_rings.png',
    };
    this.searchSample2 = {
      title: 'Test Playlist',
      type: 'Song',
      id: 'some-random-id',
      cover: 'assets/images/7_rings.png',
      artists: [this.artist, this.artist, this.artist, this.artist],
    };
    this.itemMap = {
      'library-playlist': this.getLibraryPlaylists,
      'library-artist': this.getLibraryArtist,
      'playlist-detail': this.getPlaylistDetailData,
      'genere-music': this.getGenereMusicData,
      playlist: this.getTracks,
      artist: this.getTracks,
      track: this.getTracks,
      category: this.getCategoriesData,
    };
  }

  getData(url: string): any {
    return this.itemMap[url].call(this);
  }

  getTracks(songs: number): Array<MusicInterface> {
    const tracks = [];
    for (let i = 0; i < songs; i++) {
      tracks.push(this.track);
    }
    return tracks;
  }

  updatePlaylist(playlistData: any): void {
    this.libraryPlaylist.name = playlistData.name;
  }

  getPlaylistDetailData(): PlaylistDetailInterface {
    return this.playlistDetail;
  }

  getCategoriesData(): Array<PlaylistInterface> {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(this.playlist);
    }
    return items;
  }

  getGenereMusicData(): Array<PlaylistInterface> {
    const items = [];
    for (let i = 0; i < 30; i++) {
      items.push(this.playlist);
    }
    return items;
  }

  getLibraryPlaylists(): Array<PlaylistInterface> {
    const items = [];
    this.createdPlaylist.forEach((playlist) => {
      items.splice(0, 0, playlist);
    });
    for (let i = 0; i < 8; i++) {
      items.push(this.libraryPlaylist);
    }
    return items;
  }

  getLibraryArtist(): Array<ArtistInterface> {
    const items = [];
    for (let i = 0; i < 6; i++) {
      items.push(this.artist);
    }
    return items;
  }
}
