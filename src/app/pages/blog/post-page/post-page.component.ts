import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {BlogService} from '../blog.service';
import {Observable} from 'rxjs';
import {Blog} from '../blog';
import {TAGS} from '../tags';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  id$ = this.router.paramMap.pipe(map(params => params.get('id')));
  post$: Observable<Blog> = this.id$.pipe(map(this.blogService.getPostById.bind(this.blogService)));
  relatedPosts$: Observable<Blog[]> = this.post$.pipe(map(post => this.blogService.getRelatedPostsById(post.relatedID)));
  // TODO: move to some helper class etc.
  tags = Object.entries(TAGS).map(([, key]: string[]) => key);

  constructor(private router: ActivatedRoute,
              private blogService: BlogService) {
  }
}
