import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './shared';

@Component({
  selector: 'app',
  pipes: [],
  providers: [AuthService],
  directives: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
export class App implements OnInit {
  name = 'Spring Boot Angular 2 Webpack Starter';
  url = 'https://github.com/kucharzyk';
  loading:boolean = false;

  views:Object[] = [

    {
      name: 'Home',
      description: 'Home page',
      icon: 'public',
      link: ['']
    },
    {
      name: 'Playground',
      description: 'Playground page',
      icon: 'casino',
      link: ['playground']
    },
    {
      name: 'About',
      description: 'About page',
      icon: 'person',
      link: ['about']
    }
  ];

  constructor(public authService:AuthService, public router:Router) {
  }

  logMeOut():void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  ngOnInit():void {
    console.log('app on init');
  }

}

