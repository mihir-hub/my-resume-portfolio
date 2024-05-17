import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrl: './loginmodal.component.css'
})
export class LoginmodalComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {}
  name: string = ''
  key: string = 'angularName'
  setSetionName(){
    if (typeof window !== 'undefined'){
      if(this.name == ''){
        alert("Atleast tell me your name!")
      }else{
        window.localStorage.setItem(this.key, this.name);
        alert("Thanks for sharing your name!");
        this.router.navigate(['dashboard']);
      }
    }
  }

}
