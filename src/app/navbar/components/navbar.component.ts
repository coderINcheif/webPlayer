import { NavbarItem } from '../shared/interfaces/navbar-item';
import { NavbarService } from '../navbar-item/services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems: Array<NavbarItem>;
  constructor(itemService: NavbarService) {
    this.navbarItems = itemService.items;
  }

  ngOnInit() {}
}
