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
  currentAdmin:number | undefined;

  verifyAdmin(){
    return this.http.get<LOGIN[]>(this.adminUrl);
  }

  verifyContrac(){
    return this.http.get<CONTRAC[]>(this.contracUrl);
  }

  setCurrentAdmin(adminid:number | undefined){
    this.currentAdmin = adminid;
  }
  getCurrentAdmin():number|undefined{
    return this.currentAdmin;
  }
}
