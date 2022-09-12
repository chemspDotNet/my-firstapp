import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  @HostBinding('style.box1') toggle: boolean = false;
  
  
  constructor() {}



  @HostListener('mouseleave')
  @HostListener('mouseover')
  onMouseOver() {
  
  this.toggle = !this.toggle;
  }
}
