import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Signin } from '../signin';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showPassword:any;
  formSubmitted : boolean = false;
  condition : boolean = true;
  condition1 : boolean = true;
  signinModel = new  Signin('','','','','','');
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onSubmit()
  {
  alert("submitted successfully");
  this.router.navigate(['landing']);
  }
  

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

 
}
 
  
 
