import {Component} from '@angular/core';
import {TeamService} from '../team.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {Member} from '../member';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {
  id$ = this.router.paramMap.pipe(map(params => params.get('id')));
  member$: Observable<Member> = this.id$.pipe(map(this.teamService.getMemberById.bind(this.teamService)));

  constructor(private teamService: TeamService,
              private router: ActivatedRoute) {
  }
}
