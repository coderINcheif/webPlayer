import { ArtistInterface } from './artist.interface';

export interface PlaylistInterface {
  name: string;
  artists: Array<ArtistInterface>;
  cover: string;
  owner: string;
  id: string;
}

export interface LibraryPlaylistInterface {
  id: string;
  url: string;
  name: string;
  cover: string;
}
