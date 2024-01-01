import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy{

  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;
  
  constructor(){
    //console.log('Demo component constructor called');
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
    //console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log('ngDoCheck Hook called');
    //console.log('In ngDoCheck', this.paraContent)
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Hook called');
    //console.log('In ngAfterContentInit', this.paraContent.nativeElement)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Hook called');
    //console.log('In ngAfterContentChecked', this.paraContent.nativeElement);
    //console.log('In ngAfterContentChecked', this.tempPara);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Hook called');
    //onsole.log('In ngAfterViewInit', this.tempPara);
  }


  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Hook called');
    console.log(this.tempPara.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Hook called');
  }

}
