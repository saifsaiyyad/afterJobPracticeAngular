import{Directive,Input,ElementRef,HostListener} from '@angular/core';
@Directive({
    selector:'[attr]'
})
export class attrDir{
    constructor(private _el:ElementRef){}
    @Input() colorback;
    @Input() colorFront;
    changeTheColor(F,b){
        this._el.nativeElement.style.backgroundColor=b;
        this._el.nativeElement.style.color=F;
    }
    @HostListener ("mouseenter") onmouseenter(){
        this.changeTheColor(this.colorFront,this.colorback);

    }
}