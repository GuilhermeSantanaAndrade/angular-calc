import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _digitedKeys: string[] = [];
  updatedKeys = new EventEmitter();

  constructor() { }

  push(key: string) {
    this._digitedKeys.push(key);
    this.updatedKeys.emit({ key: key, total: this._digitedKeys });
  }
}
