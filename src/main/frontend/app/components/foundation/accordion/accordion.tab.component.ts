import {Component, OnInit, Input, ElementRef} from 'angular2/core';
import {Accordion} from './accordion.component';
import {AnimationBuilder} from 'angular2/animate';

@Component({
  selector: 'accordion-tab',
  styles: [require('./accordion.tab.component.scss')],
  template: require('./accordion.tab.component.html'),
})
export class AccordionTab implements OnInit {

  @Input()
  title:string;

  @Input()
  selected:boolean = false;

  private animated:boolean = true;

  constructor(private accordion:Accordion, private myElement:ElementRef, private  animationBuilder:AnimationBuilder) {
    accordion.registerTab(this);
    this.animated = accordion.animated;
  }

  onTabClick(event) {

    if (this.animated) {
      console.log('animated');

      var class1 = 'hinge-in-from-bottom';
      var class2 = 'mui-enter';
      var class3 = 'mui-enter-active';

      var animatedElement = this.myElement.nativeElement.firstChild;
      this.animationBuilder.css()
        .addClass(class1)
        .addClass(class2)
        .start(animatedElement)
        .onComplete(() => {
          this.selected = !this.selected;
          this.animationBuilder.css()
            .addClass(class3)
            .start(animatedElement)
            .onComplete(() => {
              this.animationBuilder.css()
                .removeClass(class1)
                .removeClass(class2)
                .removeClass(class3)
                .start(animatedElement);
            });
        });
    } else {
      this.selected = !this.selected;
    }

    if (this.selected && !this.accordion.multi) {
      this.hideOtherTabs();
    }

    event.preventDefault();
  }

  ngOnInit():any {
    console.log('`AccordionTab` component init');
  }

  private hideOtherTabs() {
    this.accordion.tabs.forEach((tab:AccordionTab) => {
      tab.selected = (tab === this);
    });
  };

}
