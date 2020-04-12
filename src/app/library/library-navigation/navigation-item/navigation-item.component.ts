import { LibraryNavigationInterface } from './../shared/interfaces/lib-navigation-item.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'library-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
})
export class NavigationItemComponent implements OnInit {
  @Input('item') item: LibraryNavigationInterface;
  constructor() {}

  ngOnInit() {}
}
