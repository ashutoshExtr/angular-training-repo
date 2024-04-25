import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';

  @ViewChild('regform') form! : NgForm;

  OnFormSubmitted(){
    console.log(this.form);
    
  }
}
