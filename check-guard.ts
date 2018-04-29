import {Injectable} from '@angular/core';
import {CanActivate,CanActivateChild,CanDeactivate} from '@angular/router';
import { DetailComponent } from '../custom-component/details.component';

 Injectable()
 export class CheckGuard implements CanActivate, CanActivateChild, CanDeactivate<DetailComponent>{

    canActivate():boolean{
        return confirm('Are you enrolled for Java Course?')
    }

    canActivateChild():boolean{
        return confirm('Are You enrolled for Java Spring and Swing');
    }
    canDeactivate(template:DetailComponent):boolean{
        return confirm('Are you sure you want to navigate from this page?');
    }

 }
