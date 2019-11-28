import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextedScreenComponent } from './texted-screen/texted-screen.component';
import { ScreenComponent } from './screen/screen.component';
import { PartialScreenComponent } from './partial-screen/partial-screen.component';



@NgModule({
  declarations: [TextedScreenComponent, ScreenComponent, PartialScreenComponent],
  imports: [
    CommonModule
  ]
})
export class ScreenModule { }
