import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-observables';

  data: any[] = [];

  //create observable
  myObservable = new Observable((observer) => {
    //to emit values we need to use next method
    // observer.next([1,2,3,4,5]);
    setTimeout( () =>  { observer.next(1) }, 9000);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
  })

  GetAsyncData(){
    //this code is obeserver
    this.myObservable.subscribe((val :any) => {
      // this.data =  val;
      this.data.push(val);
      //the callback function here is the HANDLER
    });
  }
}
