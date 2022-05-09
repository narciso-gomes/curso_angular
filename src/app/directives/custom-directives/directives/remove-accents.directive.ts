import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[removeAccents]",
})
export class RemoveAccentsDirective {
  @HostListener("keyup") onKeyUp() {
    const nativeEl = this.element.nativeElement;
    this.renderer.setProperty(
      nativeEl,
      "value",
      this.removeSpecialCharacters(this.removeAccents(nativeEl.value))
    );
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private removeAccents(text: string) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  private removeSpecialCharacters(text: string) {
    return text.replace(/[^\w\s]/gi, "");
  }
}
