import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;


  //we want to raise this event whenever there is change in selection of radio button 
  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string> = new EventEmitter<string>();

  //this property is keeping tracking of which radio button selected on the web page in the CHILD COMPONENT
  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged(){
    //here only child knows what value is selected
    //console.log(this.selectedFilterRadioButton);
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
