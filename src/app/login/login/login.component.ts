import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;
  formData!: FormGroup;
  

  constructor(private router:Router, private auth:AuthserviceService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
   });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
  
    this.auth.login(this.userName,this.password).subscribe((res)=>{
      console.log(res);
    });
    
  
  
  console.log("Login page: " + this.userName);
  console.log("Login page: " + this.password);

 }


}
