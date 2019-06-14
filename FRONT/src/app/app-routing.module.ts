import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './components/user/add/add.component';
import { EditComponent } from './components/user/edit/edit.component';
import { ListComponent } from './components/user/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'add-user', component: AddComponent },
  { path: 'edit-user/:id', component: EditComponent },
  { path: 'users-list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
