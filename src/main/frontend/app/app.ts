import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';
import {OnInit} from 'angular2/core';
import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, RouterActive as any],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Index'},
  {path: '/home', component: Home, name: 'Home'},
  {
    path: '/about',
    loader: () => require('es6-promise!./about/about')('About'),
    name: 'About'
  },
  {
    path: '/playground',
    loader: () => require('es6-promise!./playground/playground')('Playground'),
    name: 'Playground'
  },
  {path: '/**', redirectTo: ['Index']}
])
export class App implements OnInit {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';

  constructor() {
    Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;
  }


  ngOnInit():any {
    console.log('app on init');
    console.log(Ng2BootstrapConfig.theme);
  }
}

