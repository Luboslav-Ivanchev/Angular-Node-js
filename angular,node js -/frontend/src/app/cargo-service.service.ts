import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargoServiceService {

  constructor(private http:HttpClient) { }


  getCargo=`http://localhost:7000/getCargos`;

  getCargos():Observable<any>{
    return this.http.get(`${this.getCargo}`);
  }

  sendCargo=`http://localhost:7000/sendCargos`;

  sendCargos(data:any):Observable<any>{
    return this.http.post(`${this.sendCargo}`,data)
  }


  updateCargo='http://localhost:7000/update';

  updateCargos(data:any,id:any):Observable<any>{
    let ids=id;
    return this.http.post(`${this.updateCargo}/${ids}`,data)
  }


  deleteCargo=`http://localhost:7000/deleteCargos`;

  deleteCargos(id:any):Observable<any>
  {
    let ids=id;
    return this.http.delete(`${this.deleteCargo}/${ids}`)
  }


}
