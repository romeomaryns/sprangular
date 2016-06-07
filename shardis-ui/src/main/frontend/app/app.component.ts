import {Component, OnInit} from '@angular/core';
import {Routes, Router} from '@angular/router';
import {Home} from './views/home/home.component';
import {AuthService} from './services/auth.service';
import {About} from './views/about/about.component';
import {Playground} from './views/playground/playground.component';
import {Login} from './views/login/login.component';

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
    path: '/',
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
    path: '/login',
    component: Login as any
  },
  {
    path: '*',
    component: Home as any
  }
])
export class App implements OnInit {
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';
  loading:boolean = false;

  views:Object[] = [

    {
      name: 'Home',
      description: 'Home page',
      icon: 'public',
      link: ['/']
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

  constructor(public authService: AuthService, public router: Router) {
  }

  logMeOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    console.log('app on init');
  }

}

