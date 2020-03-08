import { NavbarItemComponent } from './components/navbar-item/components/navbar-item.component';
import { LogoComponent } from './logo/components/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';

@NgModule({
  declarations: [LogoComponent, NavbarItemComponent],
  imports: [CommonModule, NavbarRoutingModule]
})
export class NavbarModule {}
