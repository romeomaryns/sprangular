import {RouterConfig} from '@angular/router';
import {Home} from './home';
import {Login} from './login';
import {ASYNC_ROUTES} from '../platform/browser/webpack/lazy-loader';
import {NotFound} from './not-found';

export const routes:RouterConfig = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: 'About'
  },
  {
    path: 'playground',
    component: 'Playground'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '404',
    component: NotFound
  },
  {
    path: '**',
    redirectTo: '404',
    terminal: true
  },
];

export const asyncRoutes = {
  About: ASYNC_ROUTES.About,
  Playground: ASYNC_ROUTES.Playground
};


