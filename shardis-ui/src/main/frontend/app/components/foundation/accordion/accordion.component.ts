import {Component, OnInit, Input} from '@angular/core';
import {AccordionTab} from './accordion.tab.component';

@Component({
  selector: 'accordion',
  styles: [require('./accordion.component.scss')],
  template: require('./accordion.component.html')
})
export class Accordion implements OnInit {

  @Input() multi:boolean = false;

  @Input() animated:boolean = true;

  public tabs:AccordionTab[] = [];

  constructor() {
  }

  registerTab(tab:AccordionTab) {
    this.tabs.push(tab);
  }

  ngOnInit():any {
    console.log('`Accordion` component init');
  }

}
