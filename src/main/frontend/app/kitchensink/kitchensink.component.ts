import {Component, OnInit} from 'angular2/core';


console.log('`KitchenSink` component loaded asynchronously');

@Component({
  selector: 'kitchensink',
  styles: [require('./kitchensink.component.scss')],
  template: require('./kitchensink.component.html')
})
export class KitchenSink implements OnInit {

  constructor() {
  }


  ngOnInit():any {
    console.log('hello `KitchenSink` component');
  }

}
