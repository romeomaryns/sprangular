import {Routes} from '@angular/router';
import {AboutComponent} from './about.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent
  }
];



