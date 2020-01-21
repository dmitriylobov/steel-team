import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RotatedCardComponent} from './rotated-card/rotated-card.component';
import {FlipModule} from 'ngx-flip';


@NgModule({
  declarations: [RotatedCardComponent],
  imports: [
    CommonModule,
    FlipModule
  ],
  exports: [RotatedCardComponent]
})
export class CardModule {
}
