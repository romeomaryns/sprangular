import {RouterConfig} from '@angular/router';
import {Home} from './home';
import {Login} from './login';

export const routes:RouterConfig = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: Home as any,
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
    component: Login as any
  },
  {
    path: '**',
    redirectTo: 'home',
    terminal: true
  },
];


export const asyncRoutes = {
  About: 'About',
  Playground: 'Playground'
};


