import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMySuper]'
})
export class MySuperDirective {

  public fontSize = 36;

  @HostBinding('style.font-size') get setFontSize() {
    return `${this.fontSize}px`;
  }

  @HostListener('click', ['$event']) onElementClick(event) {
    this.elementRef.nativeElement.classList.add('click-event');
  }

  constructor(private elementRef: ElementRef) {
    console.log('my-super');
  }

}
