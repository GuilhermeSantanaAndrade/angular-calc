import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [ButtonComponent, DisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, DisplayComponent]
})
export class ComponentsModule { }
