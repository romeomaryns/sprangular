import {RouterConfig} from '@angular/router';
import {Home} from './home';
import {Login} from './login';
import {ASYNC_ROUTES} from '../platform/browser/webpack/lazy-loader';
import {NotFound} from './not-found';
import {AccessDenied} from './access-denied/access-denied.component';
import {AuthenticatedGuard, AdminGuard, UnauthenticatedGuard} from './shared/guards';
import {AuthService} from './shared/auth/auth.service';

export const routes:RouterConfig = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    component: Home
  },
  {
    path: 'about',
    pathMatch: 'prefix',
    component: 'About'
  },
  {
    path: 'crud',
    pathMatch: 'prefix',
    component: 'Crud',
    canActivate: [AuthenticatedGuard, AdminGuard]
  },
  {
    path: 'playground',
    pathMatch: 'prefix',
    component: 'Playground'
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: Login,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'accessDenied',
    pathMatch: 'prefix',
    component: AccessDenied
  },
  {
    path: '404',
    pathMatch: 'prefix',
    component: NotFound
  },
  {
    path: '**',
    pathMatch: 'prefix',
    redirectTo: '404',
    terminal: true
  },
];

export const asyncRoutes = {
  About: ASYNC_ROUTES.About,
  Playground: ASYNC_ROUTES.Playground,
  Crud: ASYNC_ROUTES.Crud
};

export const AUTH_PROVIDERS = [AuthService, AdminGuard, AuthenticatedGuard, UnauthenticatedGuard];


