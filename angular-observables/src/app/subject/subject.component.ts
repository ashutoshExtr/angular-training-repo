import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
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
    //  const subject = new ReplaySubject(2);

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    // in case of bahavior subject we can pass INITIAL VALUE
    //const subject = new BehaviorSubject<number>(100);

    // observer doesnot emit same value to all its subscribers
    // obs.subscribe((data) => {
    //   console.log(data);
    // })

    //in case of subject both subscribe gets same value
    // subject.subscribe((data) => {
    //   console.log("Subscriber 1:" +data);
    // })

    // subject.subscribe((data) => {
    //   console.log("Subscriber 2:" +data);
    // })

    // //emit value
    // subject.next(2020);

    // // for this subscribe the value will not be 100, it will have value which was last emitted
    // subject.subscribe((data) => {
    //   console.log("Subscriber 3:" +data);
    // })

    // subject.next(2024);




    //AJAX CALL
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));
    // subject.subscribe((res) => console.log(res));

    // //here subject is consumer value, not providing
    // data.subscribe(subject);



    //Async Subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);

    // asyncSubject.subscribe(data => console.log(`Subscriber 1: ${data}`));

    // asyncSubject.complete();
    // asyncSubject.next(400);
    // // asyncSubject.complete();

    // asyncSubject.subscribe(data => console.log(`Subscriber 2: ${data}`));



    //Promise vs Observable

    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(100);
      resolve(200);
      resolve(300);
    })

    promise.then((data) => {
      console.log(data);
    })

    const obs = new Observable((sub) =>{
      console.log('Observable is called');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    })
    obs.subscribe(data => console.log(data));

  }
}
