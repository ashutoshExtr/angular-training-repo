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

  updateSearchText(inputEl: HTMLInputElement){
      //this.searchText = event.target.value;
    console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.SearchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged(){
    // this.SearchTextChanged.emit(this.searchText);
  }
}
