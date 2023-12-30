import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-view-children';
  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;
  // inputElements is not initilased, it only gets initialzed when the change detection cycle runs.
  //ViewChildren is always resolved after change detection is run. 
  show(){
    let name = ''
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' '
    })
    this.fullName = name.trim();
  }
}
