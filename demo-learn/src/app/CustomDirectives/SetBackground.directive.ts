import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[setBackground]',
})
export class SetBackground implements OnInit{
    // private element: ElementRef;

    // constructor(element: ElementRef) {
    //     this.element = element;
    // }
    // another way to write the above lines as

    //private element: ElementRef;
    
    constructor(private element: ElementRef) {
        
    }


    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'grey';
        this.element.nativeElement.style.color = 'white';
    }
}