import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name:string="";

  constructor(private router:Router){}

  loginSubmitt(){
    console.log(this.name);
this.router.navigate(["/home"]);
  }

}
