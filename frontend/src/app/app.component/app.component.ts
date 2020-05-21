import { ScrollService } from '../shared/services/scroll-service/scroll.service';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webPlayer';

  constructor(private scrollService: ScrollService) {}

  updateScroll(element: HTMLElement) {
    const position = element.getBoundingClientRect().top - element.offsetTop;
    this.scrollService.updateScrollPosition(position);
  }
}
