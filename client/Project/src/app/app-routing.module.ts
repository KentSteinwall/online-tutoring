import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TutorsComponent } from './student/tutors/tutors.component';
import { ScheduleComponent } from './student/schedule/schedule.component';
import { ClassroomComponent } from './student/classroom/classroom.component';
import { BillingComponent } from './student/billing/billing.component';


const routes: Routes = [
{  path:"home" ,component:HomeComponent},
{  path:"signin" ,component:SigninComponent},
{  path:"signup" ,component:SignupComponent},
{  path:"tutors" ,component:TutorsComponent},
{  path:"schedule" ,component:ScheduleComponent},
{  path:"classroom" ,component:ClassroomComponent},
{  path:"billing" ,component:BillingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
