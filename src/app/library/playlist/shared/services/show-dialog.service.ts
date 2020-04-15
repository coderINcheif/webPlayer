import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowDialogService {
  showDialog = new BehaviorSubject<boolean>(false);
  showDialog$ = this.showDialog.asObservable();
  constructor() {}

  updateStatus(status: boolean) {
    this.showDialog.next(status);
  }
}
