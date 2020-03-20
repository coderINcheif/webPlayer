import { PlaylistDetailInterface } from './../../interfaces/playlist-detail.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistDetailService {
  playlist: PlaylistDetailInterface;
  constructor() {
    this.playlist = {
      title: 'Test Playlist',
      created_by: 'Himanshu Pandey',
      id: 'some-random-id',
      artists: [
        {
          name: 'Himanshu Pandey'
        },
        {
          name: 'Random Person'
        },
        {
          name: 'John Doe'
        },
        {
          name: 'Pandey Himanshu'
        }
      ],
      cover:
        'https://upload.wikimedia.org/wikipedia/en/b/b7/Ariana_Grande_-_7_rings.png',
      songs: 7,
      tracks: [
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        },
        {
          title: 'Test Music',
          length: '3:45',
          artists: [
            {
              name: 'Himanshu Pandey'
            },
            {
              name: 'Pandey Himanshu'
            }
          ],
          releaseDate: '30th Feb 2020',
          cover: 'string'
        }
      ]
    };
  }
}
