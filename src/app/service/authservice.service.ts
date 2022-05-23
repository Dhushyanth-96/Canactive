import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isUserLoggedIn: boolean = false;

  constructor(private router:Router) { }
  
  login(userName: string, password: string):Observable<any>{
    
    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    // localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
    if(this.isUserLoggedIn) {
      console.log("loggin is ture");
      this.router.navigate(['patientlist']);
   }
   else {
      console.log("Login not done");
      this.router.navigate(['login']);
   }
   return of (console.log("Working"));
  }

  // isLogged(){
  //   return false;
  // }
}
