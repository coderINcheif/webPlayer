import { PlaylistInterface } from './../../../shared/interfaces/playlist.interface';

export interface CategoryInterface {
  title: string;
  apiURL?: string;
  items?: Array<PlaylistInterface>;
}
