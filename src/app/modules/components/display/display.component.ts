import { Component, OnInit } from '@angular/core';

import { DisplayService } from '../display/display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  history: string[] = [];

  constructor(private _displayService: DisplayService) { }

  getHistory(): string {
    return this.history.join('');
  }

  getLastElement(): string {
    return this.history[this.history.length - 1] || '';
  }

  ngOnInit(): void {
    this._displayService.updatedKeys.subscribe(infos => {
      this.history = infos.total
    })
  }
}
