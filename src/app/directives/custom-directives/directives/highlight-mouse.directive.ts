import { HostBinding, HostListener, Renderer2 } from "@angular/core";
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[highlightMouse]",
})
export class HighlightMouseDirective {
  @HostListener("mouseenter") onMouseEnter() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "backgroundColor",
    //   "yellow"
    // );

    this.backgroundColor = "yellow";
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "backgroundColor",
    //   "white"
    // );

    this.backgroundColor = "white";
  }

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor() {} // private element: ElementRef, private renderer: Renderer2
}
