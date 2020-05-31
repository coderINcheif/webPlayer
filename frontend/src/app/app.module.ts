import { FormErrorHandler } from './shared/error-handlers/form-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingIndicatorComponent } from './shared/components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [AppComponent, LoadingIndicatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [FormErrorHandler],
})
export class AppModule {}
