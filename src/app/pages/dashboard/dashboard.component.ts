import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog){}
  ngOnInit(): void {}
  openAboutMe(){
    this.dialog.open(AboutmeComponent,{
      width: '500px', height: '400px'
    });
  }
  openSkills(){
    this.dialog.open(SkillsComponent, {
      width: '500px', height: '400px'
    })
  }
  openEducation(){
    this.dialog.open(EducationComponent,{
      width: '500px', height: '400px'
    });
  }
  openExperience(){
    this.dialog.open(ExperienceComponent,{
      width: '500px', height: '400px'
    });
  }
  openContact() {
    this.dialog.open(ContactComponent, {
      width: '400px', height:'300px'
    })
  }
}
