import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParameterService {
  private _params: { [key: string]: string };
  constructor() {}

  public set params(params: { [key: string]: string }) {
    this._params = params;
  }

  public get params() {
    return this._params;
  }
}
