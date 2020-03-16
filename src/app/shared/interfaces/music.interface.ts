import { ArtistInterface } from './artist.interface';

export interface MusicInterface {
  title: string;
  artist: ArtistInterface;
  releaseDate: string;
  cover: string;
}
