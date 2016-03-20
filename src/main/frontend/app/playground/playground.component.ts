import {Component} from 'angular2/core';
import {AppComponent} from './heroes/app.component';

console.log('`Playground` component loaded asynchronously...');

@Component({
  selector: 'playground',
  template: `<br><div><my-app></my-app></div>`,
  directives: [AppComponent]
})
export class Playground {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Playground` component');
  }

}
