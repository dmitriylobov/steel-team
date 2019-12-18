import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() images: string[];
  currentIndex = 0;

  increase() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  decrease() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
