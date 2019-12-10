import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamCardComponent} from './team-card/team-card.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {CardModule} from '../../features/card/card.module';

// take a look into: https://www.pushgroup.co.uk/our-team/

@NgModule({
  declarations: [TeamListComponent, TeamCardComponent, TeamPageComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild([{path: '', component: TeamPageComponent}])
  ]
})
export class TeamModule {
}
