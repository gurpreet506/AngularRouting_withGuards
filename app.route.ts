import {Routes} from '@angular/router';
import {JavaComponent} from './views/java.component';
import {AndroidComponent} from './views/android.component';
import {HomeComponent} from './views/home.component';
import {JavaSpringComponent} from './views/java.spring.component';
import {JavaSwingComponent} from './views/java.swing.component';
import {AndroidIDEComponent} from './views/android.ide.component';
import {CheckGuard} from './router-guards/check-guard';
import {DetailComponent} from './custom-component/details.component';

export const approutes: Routes=[
    {path:'' , redirectTo:'home',pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'details' , component:DetailComponent, canDeactivate:[CheckGuard]},
    {path:'java' , component:JavaComponent,canActivate:[CheckGuard],canActivateChild:[CheckGuard],
children:[
    {path:'java/swing' , component:JavaSwingComponent},
    {path:'java/spring', component:JavaSpringComponent}
]
},
    {path:'android' , component: AndroidComponent,
children:[
    {path: 'type/:ideSelected' ,component: AndroidIDEComponent}
]
}
]