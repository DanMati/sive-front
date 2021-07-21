import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 

  }
  email = new FormControl('');
  senha = new FormControl('');
  ngOnInit(): void {
  }
  login(){
    if(this.email.value === "matiasnascimento4496@gmail.com"){
      this.router.navigate(['/area-logada/admin'])
    }
    if (this.email.value === "aldrahnanjos@gmail.com") {
      this.router.navigate(['/area-logada'])
    }
  }
}
