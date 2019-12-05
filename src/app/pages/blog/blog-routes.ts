import {BlogPageComponent} from './blog-page/blog-page.component';
import {PostPageComponent} from './post-page/post-page.component';

export const BLOG_ROUTES = [
  {path: 'post/:id', component: PostPageComponent},
  {path: 'list', component: BlogPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list'}
];
