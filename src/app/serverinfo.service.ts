import { Injectable } from '@angular/core';
import { LOGIN } from 'LOGIN';
import { CONTRAC } from 'CONTRAC';
import { ENTRY } from 'ENTRY';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class ServerinfoService {

  constructor(private http:HttpClient) { }
  adminUrl:string='http://localhost:3000/admin';
  contracUrl:string='http://localhost:3000/contractor';
  entryUrl:string = 'http://localhost:3000/entries'
  adminurl:string = '';
  contracurl:string = '';
  entryurl:string='';

  verifyAdmin(){
    return this.http.get<LOGIN[]>(this.adminUrl);
  }

  verifyContrac(){
    return this.http.get<CONTRAC[]>(this.contracUrl);
  }

  
  getAdminInfo(adminid:number|undefined):Observable<LOGIN>{
    this.adminurl= `${this.adminUrl}/${adminid}`
    console.log(this.adminurl);
    return this.http.get<LOGIN>(this.adminurl);
  }

  getContracInfo(contracid:number|undefined):Observable<CONTRAC>{
    this.contracurl = `${this.contracUrl}/${contracid}`
    return this.http.get<CONTRAC>(this.contracurl);
  }
  getEntries():Observable<ENTRY[]>{
    return this.http.get<ENTRY[]>(this.entryUrl);
  }

  markreview(entry:ENTRY){
    this.entryurl = `${this.entryUrl}/${entry.id}`
    return this.http.put<ENTRY>(this.entryurl,entry,httpOptions);
  }
}
