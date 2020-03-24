import { ArtistInterface } from './../../../../shared/interfaces/artist.interface';

export interface SearchResultInterface {
  title: string;
  type: string;
  cover: string;
  id: string;
  artists?: Array<ArtistInterface>;
}
