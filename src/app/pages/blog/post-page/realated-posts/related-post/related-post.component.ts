import {Component, Input} from '@angular/core';
import {Blog} from '../../../blog';

@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.component.html',
  styleUrls: ['./related-post.component.scss']
})
export class RelatedPostComponent {
  @Input() post: Blog;
}
