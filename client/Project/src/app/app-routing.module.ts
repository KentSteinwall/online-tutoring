import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TutorsComponent } from './student/tutors/tutors.component';


const routes: Routes = [
{  path:"home" ,component:HomeComponent},
{  path:"signin" ,component:SigninComponent},
{  path:"signup" ,component:SignupComponent},
{  path:"tutors" ,component:TutorsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
