import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
// import {MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count:number[]=[0,0,0,0,0,0];
   id:any;prod:any
  constructor(public dialog: MatDialog , private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
   
  }
  onEdit(){

    window.scrollTo(0,0);

  }
  plus(id:any){
    this.count[id]= this.count[id]+1
  }
  minus(id:any){
  if(this.count[id]>0)
  {
    this.count[id]= this.count[id]-1
  }

  }
  
  showSuccess() {
    this.prod = this.count[0]+ this.count[1] + this.count[2] + this.count[3] + this.count[4] + this.count[5];  
   
    if(this.prod != 0)
    {
      this.toastr.success('Added to Cart!');
    }
    else{
      this.toastr.warning('No items selected!');
    }
  }
  

  openDialog() {
    this.dialog.open(DialogComponent, {backdropClass:'backdropBackground' ,position: {top: '6%', right: '5%'} });
  }
  
  cart(){
    // this.router.navigate(['/example'])
  }
}


