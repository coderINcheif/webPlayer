import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NavbarModule } from './navbar/navbar.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContentModule, NavbarModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
