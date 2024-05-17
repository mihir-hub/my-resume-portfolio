import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent implements OnInit {
  userFirstName: any = '';
  goHome() { }
  ngOnInit(): void {
    this.getName();
  }
  getName() {
    if (typeof window !== 'undefined') {
      this.userFirstName = window.localStorage.getItem('angularName');
    }
  }
}
