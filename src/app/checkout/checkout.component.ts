import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public dialog: MatDialog , private router:Router,) { }

  ngOnInit(): void {
   
  }
  onEdit(){

    window.scrollTo(0,0);

  }
  
  openDialog() {
    this.dialog.open(DialogComponent, {backdropClass:'backdropBackground' ,position: {top: '6%', right: '5%'} });
  
  }
}
