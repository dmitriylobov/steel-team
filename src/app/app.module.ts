import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './features/header/header.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FooterModule} from './features/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    FooterModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

