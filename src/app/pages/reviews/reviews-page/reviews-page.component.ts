import {Component} from '@angular/core';
import {APPRAISAL_LIST} from '../reviews.config';
import {of} from 'rxjs';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent {
  reviewsList$ = of(APPRAISAL_LIST);
}
