import{Component} from '@angular/core';
import{HttpErrorResponse} from '@angular/common/http'
import {serviceOne} from '../service/service.one';
import{attrDir}from '../Directive/AttrDir'
import{structureDir} from '../Directive/structDir'
@Component({
    selector:'component-two',
    templateUrl:'component.two.html'
})
export class componentTwo{
    bggroundColor:string;
    ForgroundColor:string;
    structvariable:boolean
    constructor(private _ServiceObj:serviceOne){
        this.bggroundColor="black";
        this.ForgroundColor="red";
        this.structvariable=true
       
    }
    ngOnInit(){
        this._ServiceObj.passdata.subscribe((pos)=>{
            console.log("component two Response");
            console.log(pos)
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("client side Error")
                
            }else{
                console.log("server side Error")
            }
        }
        )
    }
    change(){
    //   setTimeout(function)
    }
    

}