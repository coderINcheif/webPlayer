import { ArtistInterface } from './artist.interface';

export interface PlaylistInterface {
  title: string;
  artists: Array<ArtistInterface>;
  cover: string;
  created_by: string;
  id: string;
}
