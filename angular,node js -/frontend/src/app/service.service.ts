import { Injectable } from '@angular/core';

import {Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private service:HttpClient) { }


  registerUrl=`http://localhost:5000/service/register`;

  registerForm(data:any):Observable<any>{
    return this.service.post(`${this.registerUrl}`,data)
  }

  loginUrl=`http://localhost:5000/service/login`;

  loginForm(data:any):Observable<any>{
    return this.service.post(`${this.loginUrl}`,data)
  }

  getData=`http://localhost:5000/service/users`;

  getUser():Observable<any>{
    return this.service.get(`${this.getData}`)
}

updateUrl=`http://localhost:5000/service/update`;

  updateUser(data:any,id:any):Observable<any>{
    let ids=id;
    return this.service.post(`${this.updateUrl}/${ids}`,data)
  }

  deleteProfile=`http://localhost:5000/service/deleteProfile`;

  deleteProfiles(id:any):Observable<any>{
    let ids=id;
    return this.service.delete(`${this.deleteProfile}/${ids}`)
  }

}
