import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"blog" , component:BlogsComponent},
  {path:"contact" , component:ContactUsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
