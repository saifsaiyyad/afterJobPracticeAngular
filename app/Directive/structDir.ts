import{Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core'
@Directive({
    selector:"[RemoveOrAdd]"
})
export class structureDir{
    constructor(private _temp:TemplateRef<any>,private _vieCont:ViewContainerRef){}
    @Input() set RemoveOrAdd(arg){
        if(arg){
            this._vieCont.createEmbeddedView(this._temp);
        }
        else{
            this._vieCont.clear();
        }
    }
   
}
