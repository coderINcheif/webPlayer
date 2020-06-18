import { AuthTokenInterceptor } from './stream.component/http-interceptors/auth-token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRoutingModule } from './stream-routing.module';
import { StreamComponent } from './stream.component/stream.component';
import { NavbarModule } from './navbar/navbar.module';
import { ViewControllerModule } from './view-controller/view-controller.module';
import { MediaControllerModule } from './media-controller/media-controller.module';
import { OverlayService } from './shared/services/overlay-service/overlay.service';
import { ScrollService } from './shared/services/scroll-service/scroll.service';
import { TestDataService } from './shared/services/test-data.service';

@NgModule({
  declarations: [StreamComponent],
  imports: [
    CommonModule,
    NavbarModule,
    ViewControllerModule,
    MediaControllerModule,
    StreamRoutingModule,
  ],
  providers: [
    OverlayService,
    ScrollService,
    TestDataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor },
  ],
})
export class StreamModule {}
