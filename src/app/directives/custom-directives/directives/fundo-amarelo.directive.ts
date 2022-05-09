import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[fundoAmarelo]",
})
export class FundoAmareloDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = "yellow";
  }
}
