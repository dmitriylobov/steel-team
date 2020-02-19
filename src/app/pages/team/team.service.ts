import {Injectable} from '@angular/core';
import {Member} from './member';
import {TEAM} from './team-config';

@Injectable()
export class TeamService {

  getMemberById(id: string): Member {
    return TEAM.find(member => `${member.id}` === id);
  }
}
