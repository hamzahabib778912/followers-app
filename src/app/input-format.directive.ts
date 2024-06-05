import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }

  @HostListener('focus') onFocus(){
    console.log("On Focus!")
  }

  @HostListener('blur') onblur(){
    console.log("On Blur!")
  }

}
