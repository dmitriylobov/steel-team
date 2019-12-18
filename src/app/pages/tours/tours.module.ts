import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursListComponent} from './tours-list/tours-list.component';
import {TourItemComponent} from './tour-item/tour-item.component';
import {TourPageComponent} from './tour-page/tour-page.component';
import {RouterModule} from '@angular/router';
import {ToursMainComponent} from './tours-main/tours-main.component';

//  take a look into
//  tourradar.com - list of tours(first part of a page)
// and
// https://www.tourradar.com/t/185437
// for example

@NgModule({
  declarations: [ToursListComponent, TourItemComponent, TourPageComponent, ToursMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ToursMainComponent},
      {path: ':id', component: TourPageComponent},
    ]),
  ]
})
export class ToursModule {
}
