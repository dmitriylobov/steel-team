import {Component, Input} from '@angular/core';
import {Blog} from '../../blog';

@Component({
  selector: 'app-realated-posts',
  templateUrl: './realated-posts.component.html',
  styleUrls: ['./realated-posts.component.scss']
})
export class RealatedPostsComponent {
  @Input() posts: Blog[];
}
