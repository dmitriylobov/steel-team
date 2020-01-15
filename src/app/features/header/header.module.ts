import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {MatIconModule, MatMenuModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [HeaderComponent, LanguageSelectorComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
