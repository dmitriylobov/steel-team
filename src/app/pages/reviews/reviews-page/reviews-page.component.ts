import {Component} from '@angular/core';
import {APPRAISAL_LIST} from '../reviews.config';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material';
import {ReviewsFormComponent} from '../reviews-form/reviews-form.component';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent {
  reviewsList$ = of(APPRAISAL_LIST);

  constructor(private dialog: MatDialog) {
  }

  addReview() {
    const dialogRef = this.dialog.open(ReviewsFormComponent);
  }
}
