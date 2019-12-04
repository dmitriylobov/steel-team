import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursListComponent } from './tours-list/tours-list.component';
import { TourItemComponent } from './tour-item/tour-item.component';
import { TourPageComponent } from './tour-page/tour-page.component';



@NgModule({
  declarations: [ToursListComponent, TourItemComponent, TourPageComponent],
  imports: [
    CommonModule
  ]
})
export class ToursModule { }
