import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './shared/user.service';

import { ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './components/user/add/add.component';
import { EditComponent } from './components/user/edit/edit.component';
import { ListComponent } from './components/user/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent
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
