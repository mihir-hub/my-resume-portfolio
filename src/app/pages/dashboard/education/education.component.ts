import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{
  name = window.localStorage.getItem('angularName')
  ngOnInit(): void {
  }
}
