import {Component, Input} from '@angular/core';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  @Input() list: Blog[];
}
