import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BLOG_ROUTES} from './blog-routes';

@NgModule({
  imports: [RouterModule.forChild(BLOG_ROUTES)],
  exports: [RouterModule]
})
export class BlogRouting { }
