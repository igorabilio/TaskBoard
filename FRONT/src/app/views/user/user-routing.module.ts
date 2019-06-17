import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';
import { UserAddComponent } from './user-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: '',
        redirectTo: 'user-list'
      },
      {
        path: 'user-list',
        component: UserListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'user-add',
        component: UserAddComponent,
        data: {
          title: 'New'
        }
      },
      {
        path: 'user-edit/:id',
        component: UserEditComponent,
        data: {
          title: 'Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
