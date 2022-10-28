import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  footer:any="";
  padd:any="";
isActiveSignin:any=true;
isActiveSignup:any=false;

onValChange(value:string){
  if(value === 'SIGN UP'){
    this.isActiveSignin = false;this.isActiveSignup = true;
    this.padd="236px";
    this.footer="160px";
  }

  else{
    this.isActiveSignin = true;this.isActiveSignup=false;
    this.padd="0";
    this.footer="-100px"
  }

}
  constructor() { }

  ngOnInit(): void {
  }

}
