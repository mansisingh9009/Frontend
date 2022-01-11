import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  myStorage = window.localStorage;
  constructor( private route : Router, private apiService : LoginServiceService) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    }); 
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // isValid(controlName) {
  //   return this.loginForm.contolName.invalid && (this.loginForm.get(controlName).touched || this.loginForm.get(controlName).dirty);
  // }
  
  login() {
    console.log(this.loginForm.value);
    
    if (this.loginForm.valid) {
      this.apiService.generateToken(this.loginForm.value)
        .subscribe(
          (data:any) => {
            if(data){
              console.log("login completed")
              // localStorage.setItem('userdetails',JSON.stringify(this.loginForm.value) )
              // console.log()
              this.apiService.loginUser(data.token);
              window.location.href="dashboard"
            }
            
            else{
              alert("invalid user")
            }
          }
          // error => {
          //   console.log(error + 'error')
          //  }
        );
    }
    
    
  }
}
