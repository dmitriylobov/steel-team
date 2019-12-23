import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeamListComponent} from './team-list/team-list.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {TeamCardModule} from './team-card/team-card.module';

// take a look into: https://www.pushgroup.co.uk/our-team/

@NgModule({
  declarations: [TeamListComponent, TeamPageComponent],
  imports: [
    CommonModule,
    TeamCardModule,
    RouterModule.forChild([{path: '', component: TeamPageComponent}])
  ]
})
export class TeamModule {
}
