import { Component, OnInit, Input } from '@angular/core';

import { DisplayService } from '../display/display.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;

  constructor(private _displayService: DisplayService) { }

  onClick() {
    this._displayService.push(this.label);
  }

  ngOnInit(): void {
  }
}
