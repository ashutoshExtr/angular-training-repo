import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  toDestroy: boolean = false;

  constructor(){
    console.log('App Component constructor called!');
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }


  ngAfterViewInit(){
    console.log('ngAfterViewInit Hook of APPCOMPONENT called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Hook of APPCOMPONENT called');
  }
}
