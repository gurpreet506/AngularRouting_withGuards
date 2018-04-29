import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import {CountriesService} from './services/countries.http.service'

@Component({
  selector: 'my-own',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

public title:string="Routing Demo";

constructor(private router:Router){

}

public gotoJava():void{
  this.router.navigate(['/java']);
}
public gotoAndroid():void{
  this.router.navigate(['/android']);
}
}
