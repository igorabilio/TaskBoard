import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list.component';
import { TaskAddComponent } from './task-add.component';
import { TaskEditComponent } from './task-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tasks'
    },
    children: [
      {
        path: '',
        redirectTo: 'task-list'
      },
      {
        path: 'task-list',
        component: TaskListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'task-add',
        component: TaskAddComponent,
        data: {
          title: 'New'
        }
      },
      {
        path: 'task-edit/:id',
        component: TaskEditComponent,
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
export class TaskRoutingModule {}
