import { NavbarService } from './navbar/services/navbar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/components/navbar.component';
import { NavbarItemComponent } from './navbar-item/components/navbar-item.component';
import { LogoComponent } from './logo/components/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LogoComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
