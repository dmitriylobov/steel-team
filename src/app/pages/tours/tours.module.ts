import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursListComponent} from './tours-list/tours-list.component';
import {TourItemComponent} from './tour-item/tour-item.component';
import {TourPageComponent} from './tour-page/tour-page.component';
import {RouterModule} from '@angular/router';
import {ToursMainComponent} from './tours-main/tours-main.component';
import {GalleryModule} from 'src/app/features/gallery/gallery.module';
import {AgmCoreModule} from '@agm/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {TeamListModule} from '../team/teams/team-list.module';
import {MatButtonModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {TourFormModule} from '../tour-form/tour-form.module';

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
    GalleryModule,
    TeamListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcGAOo7lbNi93Vi6sd9EAyOo8o03so698'
    }),
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    TourFormModule,
    MatIconModule,
  ]
})
export class ToursModule {
}
