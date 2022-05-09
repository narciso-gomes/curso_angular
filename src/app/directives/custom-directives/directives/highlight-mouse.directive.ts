import { HostBinding, HostListener, Input, Renderer2 } from "@angular/core";
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[highlightMouse]",
})
export class HighlightMouseDirective {
  @Input('highlightMouse') defaultColor = "white";
  @Input() highlightColor = "yellow";

  @HostListener("mouseenter") onMouseEnter() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "backgroundColor",
    //   "yellow"
    // );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   "backgroundColor",
    //   "white"
    // );

    this.backgroundColor = this.defaultColor;
  }

  //  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor() {} // private element: ElementRef, private renderer: Renderer2

  ngOnInit() {
     this.backgroundColor = this.defaultColor;
  }
}
