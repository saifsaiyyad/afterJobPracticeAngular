import { Component, ViewChildren, QueryList } from "@angular/core";
import { CommunicationcomponentOne} from '../compOne/com.one'

@Component({
    selector:"com-three",
    templateUrl:"com.three.html"
})
export class componentThreeViewChildren{
    @ViewChildren(CommunicationcomponentOne)
    _comOne:QueryList<CommunicationcomponentOne>=new QueryList();
    private newArray :Array<any>=[];
    constructor(){}
    ngAfterViewInit(){
        this.newArray=this._comOne.toArray();
    }
    clickMe(){
        for(var i=0 ;i<this.newArray.length;i++){
            console.log(this.newArray)

            this.newArray[i].var_one ="Hi from Component Three all Changes for var_one";
            this.newArray[i].var_two="Hi from Component Three all Changes for var_two"
                }
    }
}