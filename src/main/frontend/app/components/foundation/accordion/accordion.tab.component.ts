import {Component, OnInit, Input} from 'angular2/core';
import {Accordion} from './accordion.component';

@Component({
  selector: 'accordion-tab',
  styles: [require('./accordion.tab.component.scss')],
  template: require('./accordion.tab.component.html')
})
export class AccordionTab implements OnInit {

  @Input()
  title:string;

  @Input()
  selected:boolean = false;

  constructor(private accordion:Accordion) {
    accordion.registerTab(this);
  }

  onTabClick(event) {
    this.selected = !this.selected;
    if (this.selected && !this.accordion.multi) {
      this.accordion.tabs.forEach((tab:AccordionTab) => {
          tab.selected = (tab === this);
      });
    }

    event.preventDefault();
  }

  ngOnInit():any {
    console.log('`AccordionTab` component init');
  }

}
