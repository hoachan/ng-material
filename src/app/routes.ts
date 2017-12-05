import { Routes } from '@angular/router';

import { AppComponent } from './core/containers/app';
// import { AuthGuard } from './auth/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
//   {
//     path: 'books',
//     loadChildren: './books/books.module#BooksModule',
//     canActivate: [AuthGuard],
//   },
  { path: '**', component: NotFoundPageComponent },
];
