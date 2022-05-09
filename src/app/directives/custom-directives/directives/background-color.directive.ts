import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "p[backgroundColor]",
})
export class BackgroundColorDirective {
  constructor(private element: ElementRef, private renderer2: Renderer2) {
    // Element ref - use with caution - prefer Renderer2
    // this.element.nativeElement.style.backgroundColor = "beige";
    // this.element.nativeElement.style.padding = "10px";

    this.renderer2.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "beige"
    );

    this.renderer2.setStyle(this.element.nativeElement, "padding", "14px");
  }
}
