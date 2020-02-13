import{Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'
import {Subject,observable}from 'rxjs'
@Injectable( )
export class serviceOne{
constructor(public _http:HttpClient){}
public getdata():any{
  return  this._http.get("https://restcountries.eu/rest/v2/region/europe");
}

public passdata = new Subject<any>();
passtheData(data){
    this.passdata.next(data);
}





}