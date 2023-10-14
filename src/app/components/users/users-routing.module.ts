import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersAboutComponent } from './users-about/users-about.component';
import { UsersContactComponent } from './users-contact/users-contact.component';

const routes: Routes = [
  {
    path:'users', children:[
      {path:'user-home', component:UsersHomeComponent},
      {path:'user-about', component:UsersAboutComponent},
      {path:'user-contact', component:UsersContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
