import { Component } from '@angular/core';

@Component({
 
  template:`<div style ="width:350px;height:200px;background-color:#ff0000">
  <h1>This is Android Page </h1>
  <a [routerLink]="['type','eclipse']">Eclipse</a>
  <br/>
  <a [routerLink]="['type','Android Studio']">Android Studio</a>
  <router-outlet></router-outlet>

  `
  
})
export class AndroidComponent {
  
}