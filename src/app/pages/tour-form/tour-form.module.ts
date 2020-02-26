import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {TourFormComponent} from './tour-form/tour-form.component';

@NgModule({
  declarations: [TourFormComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [TourFormComponent],
  exports: [TourFormComponent],
})
export class TourFormModule {
}
