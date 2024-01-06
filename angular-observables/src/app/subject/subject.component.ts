import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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


    // to store old values we use replay subject
     const subject = new ReplaySubject(2);

    subject.next(100);
    subject.next(200);
    subject.next(300);

    // in case of bahavior subject we can pass INITIAL VALUE
    //const subject = new BehaviorSubject<number>(100);

    // observer doesnot emit same value to all its subscribers
    // obs.subscribe((data) => {
    //   console.log(data);
    // })

    //in case of subject both subscribe gets same value
    subject.subscribe((data) => {
      console.log("Subscriber 1:" +data);
    })

    subject.subscribe((data) => {
      console.log("Subscriber 2:" +data);
    })

    //emit value
    subject.next(2020);

    // for this subscribe the value will not be 100, it will have value which was last emitted
    subject.subscribe((data) => {
      console.log("Subscriber 3:" +data);
    })

    subject.next(2024);




    //AJAX CALL
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));

    // //here subject is consumer value, not providing
    // data.subscribe(subject);
  }
}
