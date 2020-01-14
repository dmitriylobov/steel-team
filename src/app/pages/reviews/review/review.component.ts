import {Component, Input} from '@angular/core';
import {Review} from '../review.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() item: Review;
}
