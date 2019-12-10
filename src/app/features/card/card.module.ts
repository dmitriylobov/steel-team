import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatedCardComponent } from './rotated-card/rotated-card.component';



@NgModule({
  declarations: [RotatedCardComponent],
  imports: [
    CommonModule
  ],
  exports: [RotatedCardComponent]
})
export class CardModule { }
