import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  textValue: string = 'Hellloo';

  logValue(){
    console.log('Now in focused');
    
  }
}
