import { Directive } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  inputValue: string = 'Hi There!'

  constructor() { }

}
