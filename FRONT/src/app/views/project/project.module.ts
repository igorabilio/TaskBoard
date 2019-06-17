import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectListComponent } from './project-list.component';
import { ProjectEditComponent } from './project-edit.component';
import { ProjectAddComponent } from './project-add.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule
  ],
  declarations: [ 
    ProjectListComponent,
    ProjectEditComponent,
    ProjectAddComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
