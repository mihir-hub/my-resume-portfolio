import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
  constructor(private router: Router){}
  userFirstName: any = '';
  ngOnInit(): void {
    this.getName();
  }
  getName() {
    if (typeof window !== 'undefined') {
      this.userFirstName = window.localStorage.getItem('angularName');
    }
  }
  goHome() { 
    this.router.navigate(['dashboard']);
  }
}
