import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './components/user/user-add.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserListComponent } from './components/user/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-list' },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
