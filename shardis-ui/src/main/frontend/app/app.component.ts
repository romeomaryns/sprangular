import {Component, OnInit} from '@angular/core';
import {Routes, Route} from '@angular/router';
import {Home} from './views/home/home.component';
import {LazyLoader, LazyModule} from './utils/lazy.loader';
import {AuthService} from './services/auth.service';
import {About} from './views/about/about.component';
import {Playground} from './views/playground/playground.component';
import {KitchenSink} from './views/kitchensink/kitchensink.component';

@Component({
  selector: 'app',
  pipes: [],
  providers: [AuthService],
  directives: [],
  styles: [require('./app.component.scss')],
  template: require('./app.component.html')
})
@Routes([
  new Route({path: '/', component: Home}),
  new Route({path: '/home', component: Home}),
  {
    path: '/about',
    component: About //() => LazyLoader.lazyLoad(LazyModule.ABOUT).then(m => m['About']),
  },
  {
    path: '/playground',
    component: Playground //() => LazyLoader.lazyLoad(LazyModule.PLAYGROUND).then(m => m['Playground']),
  },
  {
    path: '/kitchensink',
    component: KitchenSink //() => LazyLoader.lazyLoad(LazyModule.KITCHENSINK).then(m => m['KitchenSink']),
  },
  {path: '*', component: Home}
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

