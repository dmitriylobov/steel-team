import {Component} from '@angular/core';
import {APPRAISAL_LIST} from '../reviews.config';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material';
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
              private httpClient: HttpClient) {
  }

  addReview() {
    const dialogRef = this.dialog.open(ReviewsFormComponent).afterClosed().subscribe((element) => {
      console.log(element);
      this.httpClient.post('https://usebasin.com/f/0807c29cfecb', element).subscribe(() => console.log('goto'));
    });
  }
}
