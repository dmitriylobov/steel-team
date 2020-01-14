import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewComponent} from './review/review.component';
import {ReviewsListComponent} from './reviews-list/reviews-list.component';
import {ReviewsPageComponent} from './reviews-page/reviews-page.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';


@NgModule({
  declarations: [ReviewComponent, ReviewsListComponent, ReviewsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ReviewsPageComponent},
    ]),
    MatIconModule
  ]
})
export class ReviewsModule {
}
