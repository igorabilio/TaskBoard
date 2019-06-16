import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './shared/user/user.service';
import { ProjectService } from './shared/project/project.service'

import { ReactiveFormsModule } from '@angular/forms';

import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';

import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent,
    ProjectAddComponent,
    ProjectListComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
