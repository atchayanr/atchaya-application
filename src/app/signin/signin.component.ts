import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSubmitted : boolean = false;
  condition : boolean = true; condition1 : boolean = true;
  email :any = 'atchu@gmail.com'; pass :any = '2828';
  showPassword: any;

  signupForm = new UntypedFormGroup({
    name: new UntypedFormControl(null,Validators.required),
    dob: new UntypedFormControl(null,[Validators.required]),
    email: new UntypedFormControl(null,[Validators.email,Validators.required]),
    password: new UntypedFormControl(null,[Validators.required]),
    repassword: new UntypedFormControl(null,[Validators.required])
  });

  registerForm:any = this.signupForm;
  constructor( private formBuilder: UntypedFormBuilder,private router:Router){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
  }
  get f() { return this.signupForm.controls; }
  reactiveform() {
    this.formSubmitted = true;
    if (this.signupForm.invalid) {
      alert("Enter the Fields First!"); 
       return;
    }
    if(this.formSubmitted)
    {
      if(this.signupForm.get('password')?.value === this.pass && this.signupForm.get('email')?.value === this.email)
      {
      alert("Welcome User!!");
      console.log(this.signupForm.get('email')?.value);
      console.log(this.signupForm.get('password')?.value);
      this.router.navigate(['/home']);
      }
    if(this.signupForm.get('email')?.value != this.email ) {
      alert("Incorrect Email Id !");

    }
    if(this.signupForm.get('password')?.value != this.pass ) {
      alert("Sorry!  Incorrect PassWord ");

    }
    }
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}