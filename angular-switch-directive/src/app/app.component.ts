import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-switch-directive';

  tab: string = '';

  onInfoClicked(){
    this.tab = 'info';
  }

  onServiceClicked(){
    this.tab = 'service';
  }

  onPrivacyClicked(){
    this.tab = 'privacy';
  }

  onUserClicked(){
    this.tab = 'user';
  }
}

