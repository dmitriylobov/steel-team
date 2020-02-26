import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ContactsComponent} from './contacts/contacts.component';
import {SignFormComponent} from './sign-form/sign-form.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {SignLineComponent} from './sign-line/sign-line.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';

// take a look into https://www.yeti.com/en_US/contact-us.html

@NgModule({
  declarations: [ContactUsComponent, ContactsComponent, SignFormComponent, SignLineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ContactUsComponent}]),
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ]
})
export class ContactsModule {
}
