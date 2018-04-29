import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import {AppComponent } from './app.component';
import {HomeComponent} from './views/home.component';
import {AndroidComponent} from './views/android.component';
import {JavaComponent} from './views/java.component';
import {JavaSwingComponent} from './views/java.swing.component';
import {JavaSpringComponent} from './views/java.spring.component';
import {AndroidIDEComponent} from './views/android.ide.component';
import {DetailComponent} from './custom-component/details.component'
import {CheckGuard} from './router-guards/check-guard';
import {approutes} from './app.route';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AndroidComponent,
    JavaComponent,
    JavaSwingComponent,
    JavaSpringComponent,
    AndroidIDEComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
   
    
    

  ],
  providers: [CheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
