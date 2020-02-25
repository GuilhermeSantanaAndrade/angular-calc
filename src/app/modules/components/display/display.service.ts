import { Injectable, EventEmitter } from '@angular/core';
import { ɵTestingCompilerFactory } from '@angular/core/testing';
import { type } from 'os';

enum typeChr { tcNone, tcOperator, tcNumber, tcDecimalSeparator, tcThousandSeparator };

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _digitedKeys: string[] = [];
  updatedKeys = new EventEmitter();

  constructor() { }

  typeOfInput(key: string): typeChr {
    switch (key) {
      case '+':
      case '-':
      case '*':
      case '/':
        return typeChr.tcOperator;
      case ',':
        return typeChr.tcDecimalSeparator;
      case ',':
        return typeChr.tcThousandSeparator;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        return typeChr.tcNumber
      default:
        return typeChr.tcNone
    }
  }

  validInput(key: string) {
    const lastKey = this._digitedKeys[this._digitedKeys.length - 1];
    const typeOfLastKey = this.typeOfInput(lastKey);
    const typeOfKey = this.typeOfInput(key);
    //CONTINUAR AQUI
  }

  push(key: string) {
    this._digitedKeys.push(key);
    this.updatedKeys.emit({ key: key, total: this._digitedKeys });
  }
}
