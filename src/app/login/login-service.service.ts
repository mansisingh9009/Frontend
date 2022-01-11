import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl='http://localhost:8081/auth';
  constructor(private http:HttpClient) { }
  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  }
  isLoggedIn()
  {
    let token = localStorage.getItem('token');
   
    if(token==undefined || token==="" || token==null)
    {
      return false;
    }
    else{
      return true;
      
    }
  }
  logout(){
    localStorage.removeItem('token');
    
    return true;
  }
  generateToken(credentials:any){
    return this.http.post(this.baseUrl,credentials,{responseType:'text' as 'json'})
  }
  getToken(){
    return localStorage.getItem('token');
    
  }
}
