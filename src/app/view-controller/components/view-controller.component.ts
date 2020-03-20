import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-controller',
  templateUrl: './view-controller.component.html',
  styleUrls: ['./view-controller.component.scss']
})
export class ViewControllerComponent implements OnInit {
  constructor(private _router: Router) {}

  routeIncludes(url: string): boolean {
    return this._router.url.includes(url);
  }

  ngOnInit() {}
}
