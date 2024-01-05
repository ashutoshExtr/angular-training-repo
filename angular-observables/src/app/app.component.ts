import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-observables';

  data: any[] = [];

  array1 = [1,3,5,7];
  array2 = ['A','B','C','D'];

  //create observable
  // myObservable = new Observable((observer) => {
  //   //to emit values we need to use next method
  //   // observer.next([1,2,3,4,5]);
  //   setTimeout( () =>  { observer.next(1) }, 1000);
  //   setTimeout( () =>  { observer.next(2) }, 2000);
  //   setTimeout( () =>  { observer.next(3) }, 3000);
  //   //setTimeout( () =>  { observer.error(new Error('error try later')) }, 3000);
  //   setTimeout( () =>  { observer.next(4) }, 4000);
  //   setTimeout( () =>  { observer.next(5) }, 5000);
  //   setTimeout( () =>  { observer.complete() }, 7000);
  // })

  // of Operatior is going to emit all data and can pass multiple arguments
  myObservable = of(this.array1, this.array2);





  GetAsyncData(){
    //this code is obeserver
    // this.myObservable.subscribe((val :any) => {
    //   // this.data =  val;
    //   this.data.push(val);
    //   //the callback function here is the HANDLER
    // },
    // (err) => {
    //   alert( err.message)
    // },
    // () => {
    //   alert('you are done');
    // }
    //);
    // THIS METHOD IS DEPRECATED

      this.myObservable.subscribe({
        next : (val:any) => {
          this.data.push(val);
        },
        error(err){
          alert( err.message);
        },
        complete() {
          alert('you are done');
        },
      })
    
  }
}
