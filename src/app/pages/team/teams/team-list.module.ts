import {TeamCardComponent} from './team-card/team-card.component';
import {CardModule} from 'src/app/features/card/card.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamItemComponent} from './team-item/team-item.component';

@NgModule({
  declarations: [TeamCardComponent, TeamListComponent, TeamItemComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [TeamListComponent]
})
export class TeamListModule {
}
