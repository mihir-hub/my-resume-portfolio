import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginmodalComponent } from './pages/home/loginmodal/loginmodal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './mainpages/about/about.component';
import { SkillsComponent } from './mainpages/skills/skills.component';
import { EducationComponent } from './mainpages/education/education.component';
import { ExperienceComponent } from './mainpages/experience/experience.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'loginmodal', component: LoginmodalComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'skills', component: SkillsComponent, pathMatch: 'full'},
  {path: 'education', component: EducationComponent, pathMatch: 'full'},
  {path: 'experience', component: ExperienceComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
