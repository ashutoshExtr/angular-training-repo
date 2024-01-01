import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges,OnInit{

  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  
  constructor(){
    console.log('Demo component constructor called');
    //console.log(this.title);
    //console.log(this.message);
  }

  //this will be called after message property will be initilazed with the value which we are passing from parent component
  // this is provided by an interface.
  //to get the previous and current value of input property - pass the parameter i.e changes:SimpleChanges
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    //console.log(this.message);
    //console.log(changes);
  }

  ngOnInit(){
    console.log('ngOnInit Hook called');
    console.log(this.tempPara.nativeElement.innerHTML);
  }
}
