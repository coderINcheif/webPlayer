import { NavbarService } from './navbar/services/navbar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NavbarComponent } from './navbar/components/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/components/navbar-item.component';
import { LogoComponent } from './navbar/logo/components/logo.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
