import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  //this is how we need to bind the property of dom element in case of DIRECTIVE
  @HostBinding('value') inputValue: string = 'Hi There!';


  @HostListener('focus') logMessage(){
    console.log('i am  executed');
  }

  constructor() { }

}
