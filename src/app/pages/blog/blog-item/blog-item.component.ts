import {Component, Input} from '@angular/core';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input() item: Blog;
}
