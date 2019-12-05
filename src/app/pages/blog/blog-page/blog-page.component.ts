import { Component } from '@angular/core';
import {BLOG_CONFIG} from '../blog-config';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
 list = BLOG_CONFIG;
}
