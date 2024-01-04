import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  //providers: [SubscribeService],
  //what instance we want we neeed to provide here
  // WHAT TO PROVIDE
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  // HOW TO PROVIDE
  constructor(private subService: SubscribeService){

  }

  OnSubscribe(){
    //now instead of creating the instance on our own, we are asking angular to inject the instance.
    //header dependent on subscribeservice class. leading to tightly coupled
    //let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('monthly');
  }
}
