import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {ScreenModule} from '../../features/screen/screen.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent}]),
    ScreenModule,
  ],
})
export class HomeModule {
}
