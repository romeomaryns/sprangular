import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[shardisLarge]'
})
export class LargeDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
