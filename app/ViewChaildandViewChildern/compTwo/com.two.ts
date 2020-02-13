import { Component, ViewChild} from "@angular/core";
import {CommunicationcomponentOne} from '../compOne/com.one';

@Component({
    selector:"comp-two",
    templateUrl:"com.two.html"
})
export class communicationTwo{
    @ViewChild(CommunicationcomponentOne)
    public _comOne:CommunicationcomponentOne
    constructor(){}
    clickMe(){
        // alert("run com two")
        this._comOne.var_one="hi from component Two Var_One";
        this._comOne.var_two="hi from Componenr Two var_two";
    }
}