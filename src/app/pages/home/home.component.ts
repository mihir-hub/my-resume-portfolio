import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(private dialog: MatDialog){}

  ngOnInit(): void {}

openLoginModal() {
  this.dialog.open(LoginmodalComponent, {
    width: '400px', height: '250px'
  })
}

}
