import {Routes} from '@angular/router';
import {CrudComponent} from './crud/crud.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UnauthenticatedGuard} from './shared/guards/unauthenticated.guard';
import {AuthenticatedGuard} from './shared/guards/authenticated.guard';
import {AdminGuard} from './shared/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    component: HomeComponent
  },
  {
    path: 'about',
    pathMatch: 'prefix',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: 'crud',
    pathMatch: 'prefix',
    loadChildren: 'app/crud/crud.module#CrudModule',
    canActivate: [AuthenticatedGuard, AdminGuard]
  },
  {
    path: 'playground',
    pathMatch: 'prefix',
    loadChildren: 'app/playground/playground.module#PlaygroundModule'
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'accessDenied',
    pathMatch: 'prefix',
    component: AccessDeniedComponent
  },
  {
    path: '404',
    pathMatch: 'prefix',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: '404'
  },
];



