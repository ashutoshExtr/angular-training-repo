import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  //providers: [SubscribeService],
  //what instance we want we neeed to provide here
  // WHAT TO PROVIDE
})
export class SidebarComponent {

  //we need to tell angular how we want dependency to be injected. here by making use of constructor
  // HOW TO PROVIDE
  constructor(private subService: SubscribeService){

  }

  //sidebar component  has dependency on subscribeservice class.
  OnSubscribe(){
    //let subService = new SubscribeService();
    this.subService.OnSubscribeClicked('daily');
  }
}
