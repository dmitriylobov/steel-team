import {Component, Input} from '@angular/core';
import {Member} from '../../member';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  @Input() list: Member[];
}

