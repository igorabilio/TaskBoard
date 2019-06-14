import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './shared/user/user.service';

import { ReactiveFormsModule } from '@angular/forms';

import { UserAddComponent } from './components/user/user-add.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserListComponent } from './components/user/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
