import { PlaylistInterface } from '../../shared/interfaces/playlist.interface';
import { MusicInterface } from 'src/app/shared/interfaces/music.interface';

export interface PlaylistDetailInterface extends PlaylistInterface {
  tracks: Array<MusicInterface>;
  songs: number;
}
