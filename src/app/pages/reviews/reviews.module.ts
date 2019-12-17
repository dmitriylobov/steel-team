import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';



@NgModule({
  declarations: [ReviewComponent, ReviewsListComponent, ReviewsPageComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewsModule { }
