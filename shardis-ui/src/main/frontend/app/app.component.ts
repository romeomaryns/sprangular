import {Component, OnInit} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
import {Home} from './views/home/home.component';
import {LazyLoader, LazyModule} from './utils/lazy.loader';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app',
  pipes: [],
  providers: [AuthService],
  directives: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@RouteConfig([
  {path: '/', component: Home, name: 'Index', useAsDefault: true},
  {path: '/home', component: Home, name: 'Home'},
  {
    path: '/about',
    loader: () => LazyLoader.lazyLoad(LazyModule.ABOUT).then(m => m['About']),
    name: 'About'
  },
  {
    path: '/playground',
    loader: () => LazyLoader.lazyLoad(LazyModule.PLAYGROUND).then(m => m['Playground']),
    name: 'Playground'
  },
  {
    path: '/kitchensink',
    loader: () => LazyLoader.lazyLoad(LazyModule.KITCHENSINK).then(m => m['KitchenSink']),
    name: 'KitchenSink'
  },
  {path: '/**', redirectTo: ['Index']}
])
export class App implements OnInit {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';

  constructor(public authService: AuthService) {
  }

  ngOnInit():void {
    console.log('app on init');
  }

}

