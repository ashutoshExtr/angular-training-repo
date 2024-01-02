import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";


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
    
    //private renderer: Renderer2;
    constructor(private element: ElementRef, private renderer: Renderer2) {
        //this.renderer = renderer;
    }


    ngOnInit(){
        //this.element.nativeElement.style.backgroundColor = 'grey';
        //this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        //this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is title');
    }

    // nativeElement gives direct access to the DOM. this is not recoomended way to do.
    // we will make use of RENDERER2 class. 
    // Renderer2 allows us to manipulate the DOM, without accessing the dom elements directly, by providing a layer of abstrcation betn DOM element and component code.
}