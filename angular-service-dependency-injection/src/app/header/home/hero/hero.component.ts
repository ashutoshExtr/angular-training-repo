import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  //providers: [SubscribeService],
  //what instance we want we neeed to provide here
  // WHAT TO PROVIDE
})
export class HeroComponent {
  //hero coponent  has dependency on subscribeservice class.

   // HOW TO PROVIDE
  constructor(private subService: SubscribeService){

  }



  OnSubscribe(){
    //let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('yearly');
  }
}
