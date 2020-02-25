import { Component } from '@angular/core';

import { DisplayService } from './modules/components/display/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';

  constructor(private _displayService: DisplayService) {

  }

  handleClick(key: string) {
    this._displayService.push(key);
  }
}
