import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private eleref: ElementRef) {
       debugger
       let ele = eleref.nativeElement;

   }


  @HostListener('mouseover')
  mouseOver(){
    // console.log(this.eleref.nativeElement) 
  }

  
  @HostListener('mouseleave')
  mouseLeave(){
    
  }

}

