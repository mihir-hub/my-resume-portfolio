import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
goHome() {
throw new Error('Method not implemented.');
}
  userFirstName = window.localStorage.getItem('angularName')
  ngOnInit(): void {}
  
}
