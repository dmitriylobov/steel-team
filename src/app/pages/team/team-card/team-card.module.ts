import {TeamCardComponent} from './team-card.component';
import {CardModule} from 'src/app/features/card/card.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [TeamCardComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [TeamCardComponent]
})
export class TeamCardModule {
}
