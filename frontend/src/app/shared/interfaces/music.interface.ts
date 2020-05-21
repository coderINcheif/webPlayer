import { ArtistInterface } from './artist.interface';

export interface MusicInterface {
  title: string;
  artists: Array<ArtistInterface>;
  releaseDate: string;
  cover: string;
  length: string;
  liked?: boolean;
}
