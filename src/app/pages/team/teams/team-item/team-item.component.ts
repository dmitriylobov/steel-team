import {Component, Input} from '@angular/core';
import {Member} from '../../member';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent {
  @Input() team: Member;
}
