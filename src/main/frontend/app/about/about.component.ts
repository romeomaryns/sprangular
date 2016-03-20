import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {FORM_DIRECTIVES} from 'angular2/common';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [require('./about.component.scss')],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `<div>
  <li class="fa fa-star fa-6"></li>
  <span>Spring boot Angular 2 starter</span>
  <li class="fa fa-star fa-6"></li>
</div>
`
})
export class About implements OnInit {

  constructor() {
  }


  ngOnInit():any {
    console.log('hello `About` component');
  }

}
