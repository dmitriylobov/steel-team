import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogPageComponent } from './blog-page/blog-page.component';



@NgModule({
  declarations: [BlogListComponent, BlogItemComponent, BlogPageComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
