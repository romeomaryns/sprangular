import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {Playground} from './playground';
import {Login} from './login';

const routes:RouterConfig = [
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
    component: About as any
  },
  {
    path: 'playground',
    component: Playground as any
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

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
