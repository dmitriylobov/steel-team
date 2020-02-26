import {Component} from '@angular/core';
import {ToursService} from '../tours.service';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../tour';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TEAM} from '../../team/team-config';
import {MatDialog, MatSnackBar} from '@angular/material';
import {TourFormComponent} from '../../tour-form/tour-form/tour-form.component';
import {filter} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.scss'],
  providers: [ToursService]
})
export class TourPageComponent {
  active$: Observable<Tour>;

  zoom = 7;
  team = TEAM.slice(0, 2);

  constructor(private toursService: ToursService,
              private route: ActivatedRoute,
              private snack: MatSnackBar,
              private dialog: MatDialog,
              private http: HttpClient) {
    this.active$ = this.route.paramMap.pipe(map(p => +p.get('id')),
      map(this.toursService.getTourById.bind(this.toursService)));
  }

  acceptTour() {
    this.dialog.open(TourFormComponent).afterClosed().pipe(
      filter(result => result && result.name && result.tel),
    ).subscribe(this.sendRequest.bind(this));
  }

  private sendRequest(result) {
    this.http.post('https://usebasin.com/f/f2809cfc6640', result)
      .subscribe(this.showNotification.bind(this), this.showNotification.bind(this));

  }

  private showNotification() {
    this.snack.open('Ваща заявка отправлена! Скоро мы с вами свяжемся!', '', {duration: 1500});
  }
}
