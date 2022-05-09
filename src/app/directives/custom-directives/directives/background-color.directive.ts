import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'p[backgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private element: ElementRef) {

    this.element.nativeElement.style.backgroundColor = 'beige';
    this.element.nativeElement.style.padding = '10px';
  }

}
