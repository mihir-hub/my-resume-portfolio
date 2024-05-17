import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent implements OnInit{
  name = window.localStorage.getItem('angularName')
  ngOnInit(): void {
  }

}
