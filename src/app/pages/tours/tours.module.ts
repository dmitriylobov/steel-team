import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursListComponent } from './tours-list/tours-list.component';
import { TourItemComponent } from './tour-item/tour-item.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ToursListComponent, TourItemComponent, TourPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ToursListComponent}]),
  ]
})
export class ToursModule { }
