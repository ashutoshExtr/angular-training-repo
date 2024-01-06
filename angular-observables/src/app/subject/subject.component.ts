import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
  ngOnInit(){ 
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random())
    // })

    const subject = new Subject();

    // observer doesnot emit same value to all its subscribers
    // obs.subscribe((data) => {
    //   console.log(data);
    // })

    //in case of subject both subscribe gets same value
    subject.subscribe((data) => {
      console.log(data);
    })

    subject.subscribe((data) => {
      console.log(data);
    })

    subject.next(Math.random());
  }
}
