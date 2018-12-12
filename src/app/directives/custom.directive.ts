import { Directive, ElementRef } from "@angular/core";




@Directive({
        selector:'[only-alphabets]',
        
})
export class OnlyAlphabets {

    constructor(public el : ElementRef) { 
        this.el.nativeElement.onkeypress = (evt) => {
            if(!((evt.which >= 97 && evt.which <= 122) || (evt.which >= 65 && evt.which <=90))) {
                evt.preventDefault();

            }
        }
    }
}
 @Directive({
            selector:'[only-numbers]',
            
    })
export class OnlyNumbers {
        constructor(public el : ElementRef) { 
        this.el.nativeElement.onkeypress = (evt) => {
            if(!((evt.which >= 48 && evt.which <= 58))) {
                evt.preventDefault();

            }
        }
    }
   
}


