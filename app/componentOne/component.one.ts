import{Component,OnInit} from "@angular/core"
import{HttpErrorResponse} from '@angular/common/http'
import {serviceOne}from '../service/service.one'
@Component({
    selector:"component-one",
    templateUrl:"component.one.html",
})
export class componentOne{
constructor(private _serviceObj:serviceOne){}
ngOnInit(){
this.getaRestData();
}
getaRestData(){
this._serviceObj.getdata().subscribe((pos)=>{
    console.log(pos)
    this._serviceObj.passtheData(pos);
},(err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("client side Error")
    }else{
        console.log("server side error")
    }
})

}
}