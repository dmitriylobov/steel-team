import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TeamPageComponent} from './team-page/team-page.component';
import {TeamListModule} from './teams/team-list.module';
import {TeamMemberComponent} from './team-member/team-member.component';
import {TeamService} from './team.service';

// take a look into: https://www.pushgroup.co.uk/our-team/

@NgModule({
  declarations: [TeamPageComponent, TeamMemberComponent],
  providers: [TeamService],
  imports: [
    CommonModule,
    TeamListModule,
    RouterModule.forChild([
      {path: '', component: TeamPageComponent},
      {path: 'member/:id', component: TeamMemberComponent},
    ])
  ]
})
export class TeamModule {
}
