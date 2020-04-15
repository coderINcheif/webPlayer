import { TestDataService } from '../../../shared/services/test-data.service';
import { PlaylistDetailInterface } from '../../interfaces/playlist-detail.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistDetailService {
  playlist: PlaylistDetailInterface;
  constructor(private testDataService: TestDataService) {
    this.playlist = this.testDataService.getData('playlist-detail');
  }
}