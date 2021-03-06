import {Component, Input} from '@angular/core';
import {Member} from '../../member';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() team: Member;
}
