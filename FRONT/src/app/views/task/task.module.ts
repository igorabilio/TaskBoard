import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list.component';
import { TaskAddComponent } from './task-add.component';
import { TaskEditComponent } from './task-edit.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  declarations: [ 
    TaskListComponent,
    TaskAddComponent,
    TaskEditComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
