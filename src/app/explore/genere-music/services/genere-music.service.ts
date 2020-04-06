import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenereMusicService {
  constructor() {}

  getTitle(url: string) {
    let title = url.replace(/-/g, ' ');
    title = title.replace(title[0], title[0].toUpperCase());
    return title;
  }
}
