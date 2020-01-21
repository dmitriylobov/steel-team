import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeamPageComponent} from './team-page/team-page.component';
import {TeamListModule} from './teams/team-list.module';

// take a look into: https://www.pushgroup.co.uk/our-team/

@NgModule({
  declarations: [TeamPageComponent],
  imports: [
    CommonModule,
    TeamListModule,
    RouterModule.forChild([{path: '', component: TeamPageComponent}])
  ]
})
export class TeamModule {
}
