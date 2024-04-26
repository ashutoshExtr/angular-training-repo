import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;

  genders = [
    {id: 'check-male', value: 'male', display: 'Male'},
    {id: 'check-female', value: 'female', display: 'Female'},
    {id: 'check-other', value: 'other', display: 'Prefer not to say'},
  ]


  defaultGender: string = 'male';

  @ViewChild('regform') form! : NgForm;

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value.firstname);
    console.log(this.form.value.lastname);
    console.log(this.form.value.email);
    console.log(this.form.value.country);
    
  }
}
