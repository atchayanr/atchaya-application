import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog , private router:Router) { }

  ngOnInit(): void {
  }
  // openDialog() {
  //   this.dialog.open(DialogComponent, {backdropClass:'backdropBackground' ,position: {top: '6%', right: '5%'} });
  
  // }
}
