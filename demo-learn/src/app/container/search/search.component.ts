import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //create an event
  @Output()
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>()

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  onSearchTextChanged(){
    this.SearchTextChanged.emit(this.searchText);
  }
}
