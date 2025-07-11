import { Component, inject } from '@angular/core';
import {FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class LoginComponent {
  user={
    email:'',
    password:''
  };
  storedUser={
    email:'test@gmail.com',
    password:'password123',
  };

  loginValid:boolean=false;

  router=inject(Router);
  password: any;
  email: any;

  validateLogin(email:string,password:string):boolean{
    return email===this.storedUser.email && password===this.storedUser.password;
  }

  login(){
    console.log('Login start')
    if(this.validateLogin(this.user.email,this.user.password)){
      localStorage.setItem('loggedInUser',JSON.stringify(this.user.email));
      this.loginValid=true;
      this.router.navigate(['/']);
    }else{
      // alert('Incorrect email or password');
      this.loginValid=false;
    }
  }

}