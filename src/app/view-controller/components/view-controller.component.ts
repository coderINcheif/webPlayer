import { OverlayService } from './../../shared/services/overlay-service/overlay.service';
import { SyncService } from '../search/shared/services/sync.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-controller',
  templateUrl: './view-controller.component.html',
  styleUrls: ['./view-controller.component.scss']
})
export class ViewControllerComponent implements OnInit {
  overlay = false;
  constructor(
    private overlayService: OverlayService,
    private syncService: SyncService,
    private _router: Router
  ) {}

  routeIncludes(url: string): boolean {
    return this._router.url.includes(url);
  }

  ngOnInit() {
    this.overlayService.overlayStatus$.subscribe(status => {
      this.overlay = status;
    });
  }

  updateSearchingStatus(status: boolean) {
    this.syncService.updateSearchingStatus(status);
  }
}
