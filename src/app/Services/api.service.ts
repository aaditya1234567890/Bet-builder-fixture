import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient){}
  
  private _url='http://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1'
 

  getJson():Observable<any>{
    return this.http.get(this._url)
  }




}
