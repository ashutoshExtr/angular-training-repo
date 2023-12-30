import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  //create an event
  @Output()
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef

  updateSearchText(){
      //this.searchText = event.target.value;
    //console.log(inputEl.value);
    //this.searchText = inputEl.value;
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged(){
    // this.SearchTextChanged.emit(this.searchText);
  }
}
