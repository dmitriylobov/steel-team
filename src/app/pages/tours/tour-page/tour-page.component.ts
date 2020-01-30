import {Component} from '@angular/core';
import {ToursService} from '../tours.service';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../tour';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TEAM} from '../../team/team-config';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss'],
  providers: [ToursService]
})
export class TourPageComponent {
  active$: Observable<Tour>;

  zoom = 7;
  team = TEAM.slice(0, 3);

  constructor(private toursService: ToursService,
              private route: ActivatedRoute) {
    this.active$ = this.route.paramMap.pipe(map(p => +p.get('id')),
      map(this.toursService.getTourById.bind(this.toursService)));
  }

}
