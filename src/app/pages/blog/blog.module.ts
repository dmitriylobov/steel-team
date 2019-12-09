import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {BlogRouting} from './blog-routing.module';
import {BlogService} from './blog.service';
import {TagsListComponent} from './post-page/tags-list/tags-list.component';
import {RealatedPostsComponent} from './post-page/realated-posts/realated-posts.component';
import {RelatedPostComponent} from './post-page/realated-posts/related-post/related-post.component';
import {SafeModule} from '../../features/utils/safe/safe.module';

// take a look into
// https://www.garmin.com/en-US/blog/fitness/
// and
// https://www.garmin.com/en-US/blog/fitness/tacx-training-app/
// for example

@NgModule({
  declarations: [BlogListComponent,
    BlogItemComponent,
    BlogPageComponent,
    PostPageComponent,
    TagsListComponent,
    RealatedPostsComponent,
    RelatedPostComponent],
  imports: [
    CommonModule,
    BlogRouting,
    SafeModule,
  ],
  providers: [BlogService],
})
export class BlogModule {
}
