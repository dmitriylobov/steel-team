import {BLOG_CONFIG} from './blog-config';
import {Blog} from './blog';

export class BlogService {
  getPostById(id: string): Blog {
    return BLOG_CONFIG.find(post => `${post.id}` === id);
  }

  getRelatedPostsById(IDs: number[]) {
    const isRelated = (id: number) => IDs.some(i => i === id);
    return BLOG_CONFIG.filter(post => isRelated(post.id));
  }
}
