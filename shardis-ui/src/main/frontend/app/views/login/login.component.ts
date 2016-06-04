import {Component, OnInit} from '@angular/core';

console.log('`Login` component loaded asynchronously');

@Component({
  selector: 'login',
  styles: [require('./login.component.scss')],
  template: require('./login.component.html')
})
export class Login implements OnInit {

  constructor() {
  }


  ngOnInit():any {
    console.log('hello `Login` component');
  }

}
