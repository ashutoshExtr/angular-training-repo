import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChild('para') paragraphEl: ElementRef;

  @ContentChild(TestComponent) testEl: TestComponent;

  

  
  StyleParagraph(){
    console.log(this.paragraphEl.nativeElement);
    console.log(this.testEl.name);
    

    
  }
}
