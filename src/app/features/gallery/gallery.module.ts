import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery/gallery.component';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    LazyLoadImagesModule],
  exports: [GalleryComponent]
})
export class GalleryModule {
}
