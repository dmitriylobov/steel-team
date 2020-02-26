import {Component} from '@angular/core';
import {APPRAISAL_LIST} from '../reviews.config';
import {of} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ReviewsFormComponent} from '../reviews-form/reviews-form.component';
import {HttpClient} from '@angular/common/http';
import {filter} from 'rxjs/internal/operators';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent {
  reviewsList$ = of(APPRAISAL_LIST);

  constructor(private dialog: MatDialog,
              private httpClient: HttpClient,
              private matSnack: MatSnackBar) {
  }

  addReview() {
    this.dialog.open(ReviewsFormComponent).afterClosed().pipe(
      filter(element => element && element.name && element.review),
    ).subscribe(this.sendReview.bind(this));
  }

  private sendReview(review) {
    this.httpClient.post('https://usebasin.com/f/0807c29cfecb', review)
      .subscribe(this.showSnackBar.bind(this), this.showSnackBar.bind(this));
  }

  private showSnackBar() {
    this.matSnack.open('Спасибо! Ваш отзыв был отправлен на модерацию!', '', {duration: 1500});
  }
}
