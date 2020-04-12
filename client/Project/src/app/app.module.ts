import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { StudentHeaderComponent } from './student/student-header/student-header.component';
import { StudentFooterComponent } from './student/student-footer/student-footer.component';
import { StudentSidebarComponent } from './student/student-sidebar/student-sidebar.component';
import { TutorsComponent } from './student/tutors/tutors.component';
import { ScheduleComponent } from './student/schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { ClassroomComponent } from './student/classroom/classroom.component';
import { BillingComponent } from './student/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentSidebarComponent,
    TutorsComponent,
    ScheduleComponent,
    ClassroomComponent,
    BillingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
