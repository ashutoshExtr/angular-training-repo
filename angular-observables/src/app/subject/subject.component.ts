import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

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

    //const subject = new Subject();

    // observer doesnot emit same value to all its subscribers
    // obs.subscribe((data) => {
    //   console.log(data);
    // })

    //in case of subject both subscribe gets same value
    // subject.subscribe((data) => {
    //   console.log(data);
    // })

    // subject.subscribe((data) => {
    //   console.log(data);
    // })

    // subject.next(Math.random());


    //AJAX CALL
    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/');

    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));

    //here subject is consumer value, not providing
    data.subscribe(subject);
  }
}
