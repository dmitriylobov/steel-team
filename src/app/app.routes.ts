import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'tours', loadChildren: './pages/tours/tours.module#ToursModule'},
  { path: 'team', loadChildren: './pages/team/team.module#TeamModule'},
  { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule'},
  { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsModule'},
  { path: 'join', loadChildren: './pages/sign/sign.module#SignModule'},
  { path: 'reviews', loadChildren: './pages/reviews/reviews.module#ReviewsModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];
