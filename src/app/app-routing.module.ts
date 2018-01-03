import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent }   from './article-list/article-list.component';
import { NotImplementedComponent }   from './not-implemented/not-implemented.component';
import { AdminComponent }   from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news',  component: ArticleListComponent },
  { path: 'new',  component: NotImplementedComponent },
  { path: 'comments',  component: NotImplementedComponent },
  { path: 'admin',  component: AdminComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
