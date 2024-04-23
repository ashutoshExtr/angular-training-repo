import { Component } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl: string = '';
  
  constructor(private dataService: DataService) {}

  getImage() {
    this.dataService.getImageUrl().subscribe((response: any) => {
      console.log(response);
      this.imageUrl = response.data[0].imageUrl;
    });
  }
}