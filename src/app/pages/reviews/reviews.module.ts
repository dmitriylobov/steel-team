import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewComponent} from './review/review.component';
import {ReviewsListComponent} from './reviews-list/reviews-list.component';
import {ReviewsPageComponent} from './reviews-page/reviews-page.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ReviewsFormComponent} from './reviews-form/reviews-form.component';
import {TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  declarations: [ReviewComponent, ReviewsListComponent, ReviewsPageComponent, ReviewsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ReviewsPageComponent},
    ]),
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [
    ReviewsFormComponent,
  ],
})
export class ReviewsModule {
}
