import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginmodalComponent } from './pages/home/loginmodal/loginmodal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './comps/head/head.component';
import { AboutmeComponent } from './pages/dashboard/aboutme/aboutme.component';
import { SkillsComponent } from './pages/dashboard/skills/skills.component';
import { EducationComponent } from './pages/dashboard/education/education.component';
import { ExperienceComponent } from './pages/dashboard/experience/experience.component';
import { AboutComponent } from './mainpages/about/about.component';
import { ContactComponent } from './pages/dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginmodalComponent,
    DashboardComponent,
    HeadComponent,
    AboutmeComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
