import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-list' },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'project-add', component: ProjectAddComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent },
  { path: 'project-list', component: ProjectListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
