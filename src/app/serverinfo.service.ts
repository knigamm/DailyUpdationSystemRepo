import { Injectable } from '@angular/core';
import { LOGIN } from 'LOGIN';
import { CONTRAC } from 'CONTRAC';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServerinfoService {

  constructor(private http:HttpClient) { }
  adminUrl:string='http://localhost:3000/admin';
  contracUrl:string='http://localhost:3000/contractor'
  verifyAdmin(){
    return this.http.get<LOGIN[]>(this.adminUrl);
  }

  verifyContrac(){
    return this.http.get<CONTRAC[]>(this.contracUrl);
  }

  setCurrentAdmin(adminid:number){
    
  }
}
