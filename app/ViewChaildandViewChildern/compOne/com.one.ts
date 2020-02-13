import { Component } from "@angular/core";

@Component({
    selector:"communication-one",
    templateUrl:"com.one.html"
})
export class CommunicationcomponentOne{
    public var_one;
    public var_two;
    constructor(){
        this.var_one="from Component One value for var_one";
        this.var_two="from Component One value for var_two";
    }
}