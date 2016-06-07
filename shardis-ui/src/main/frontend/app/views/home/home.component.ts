import {Component} from '@angular/core';

import {Title} from './services/title.service.ts';
import {XLarge} from './../../directives/x-large.directive.ts';
import {AuthService} from '../../services/auth.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [XLarge as any],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./home.component.scss')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.component.html')
})
export class Home {
  angularLogo = 'assets/img/angular-logo.png';
  // Set our default values
  data = {value: ''};
  // TypeScript public modifiers
  constructor(public title: Title, public authService: AuthService) {
  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.title.getData().subscribe(data => this.data = data);
  }

}
