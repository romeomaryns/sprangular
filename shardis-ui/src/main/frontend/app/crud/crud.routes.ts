import {Routes} from '@angular/router';
import {CrudComponent} from './crud.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CrudComponent
  }
];



