import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ng-container';

  toggle:boolean = true;

  onToggle(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
    
  }
}
