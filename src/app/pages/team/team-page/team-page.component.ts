import { Component } from '@angular/core';
import {TEAM} from '../team-config';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {
 team = TEAM;
}
