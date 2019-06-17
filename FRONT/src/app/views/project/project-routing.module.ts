import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListComponent } from './project-list.component';
import { ProjectEditComponent } from './project-edit.component';
import { ProjectAddComponent } from './project-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects'
    },
    children: [
      {
        path: '',
        redirectTo: 'project-list'
      },
      {
        path: 'project-list',
        component: ProjectListComponent,
        data: {
          title: 'List'
        }
      },
      {
        path: 'project-edit/:id',
        component: ProjectEditComponent,
        data: {
          title: 'Edit'
        }
      },
      {
        path: 'project-add',
        component: ProjectAddComponent,
        data: {
          title: 'New'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
