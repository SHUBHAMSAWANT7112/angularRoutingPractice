import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersAboutComponent } from './users-about/users-about.component';
import { UsersContactComponent } from './users-contact/users-contact.component';


@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersAboutComponent,
    UsersContactComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
