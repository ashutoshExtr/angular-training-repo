import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  OnSubscribe(){
    let subService = new SubscribeService();
    subService.OnSubscribeClicked('yearly');
  }
}
