import { PlaylistInterface } from '../../interfaces/playlist.interface';
import { MusicInterface } from 'src/app/stream/shared/interfaces/music.interface';

export interface PlaylistDetailInterface extends PlaylistInterface {
  tracks: Array<MusicInterface>;
  songs: number;
  primaryColor: string;
}
