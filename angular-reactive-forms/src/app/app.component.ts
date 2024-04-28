import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'angular-reactive-forms';

  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname:new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      street: new FormControl(null, Validators.required),
      country: new FormControl('India', Validators.required),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null, Validators.required),
      
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
  }
}
