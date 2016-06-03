import {Component, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {Home} from './views/home/home.component';
import {AuthService} from './services/auth.service';
import {About} from './views/about/about.component';
import {Playground} from './views/playground/playground.component';

@Component({
  selector: 'app',
  pipes: [],
  providers: [AuthService],
  directives: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@Routes([
  {
    path: '/home',
    component: Home as any
  },
  {
    path: '/about',
    component: About as any//() => LazyLoader.lazyLoad(LazyModule.ABOUT).then(m => m['About']),
  },
  {
    path: '/playground',
    component: Playground as any //() => LazyLoader.lazyLoad(LazyModule.PLAYGROUND).then(m => m['Playground']),
  },
  {
    path: '*',
    component: Home as any
  }
])
export class App implements OnInit {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';
  loading: boolean = false;

  views: Object[] = [
    {
      name: 'Index',
      description: 'Index page',
      icon: 'public',
      link: ['/home']
    },
    {
      name: 'Home',
      description: 'Home page',
      icon: 'domain',
      link: ['/home']
    },
    {
      name: 'Playground',
      description: 'Playground page',
      icon: 'casino',
      link: ['/playground']
    },
    {
      name: 'About',
      description: 'About page',
      icon: 'person',
      link: ['/about']
    }
  ];

  constructor(public authService:AuthService) {
  }

  ngOnInit():void {
    console.log('app on init');
  }

}

