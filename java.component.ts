import { Component } from '@angular/core';

@Component({
 
  template: 
  `<div style="width:350px;height:200px;background-color:#00ff00">
  <h1>This is java page</h1>
  <a [routerLink]="['java/swing']">Swing</a><br>
  <a [routerLink]="['java/spring']">Spring</a>
  <div>
  <router-outlet></router-outlet>
  </div>
  
  </div>
  
  
  `
  
})
export class JavaComponent {
  
}