import {Component} from '@angular/core';
import {APPRAISAL_LIST} from '../reviews.config';
import {of} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ReviewsFormComponent} from '../reviews-form/reviews-form.component';
import {HttpClient} from '@angular/common/http';

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
    const dialogRef = this.dialog.open(ReviewsFormComponent).afterClosed().subscribe((element) => {
      this.httpClient.post('https://usebasin.com/f/0807c29cfecb', element).subscribe(() => {
        this.matSnack.open('Спасибо! Ваш отзыв был отправлен на модерацию!');
      }, () => {
        this.matSnack.open('Спасибо! Ваш отзыв был отправлен на модерацию!');
      });
    });
  }
}
