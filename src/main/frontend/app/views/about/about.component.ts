import {Component, OnInit} from 'angular2/core';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [require('./about.component.scss')],
  template: require('./about.component.html')
})
export class About implements OnInit {

  constructor() {
  }


  ngOnInit():any {
    console.log('hello `About` component');
  }

}
