import {Component, OnInit} from '@angular/core';

console.log('`Crud` component loaded asynchronously');

@Component({
  selector: 'crud',
  styles: [require('./crud.component.scss')],
  template: require('./crud.component.html')
})
export class Crud implements OnInit {

  constructor() {
  }


  ngOnInit():any {
    console.log('hello `Crud` component');
  }

}
