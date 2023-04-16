import { Component } from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import {Observable,Subscription} from 'rxjs'
import { LOGIN } from 'LOGIN';
import { CONTRAC } from 'CONTRAC';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  adminbtn:boolean=true;
  contracbtn:boolean=false;
  username:string='';
  password:string='';
  constructor(private server:ServerinfoService,private router:Router){}
  togglebtn(event:MouseEvent){
    const btn=event.target as HTMLButtonElement;
    if(btn.id == "btn1"){
    this.adminbtn = true;
    this.contracbtn = false;
    }
    else{
    this.contracbtn = true;
    this.adminbtn = false;
  }
  }

  onSubmit(){
    if(this.adminbtn){
    this.server.verifyAdmin().subscribe(
      {
        next:(value)=>{
          for(let val of value){
            if(val.username===this.username && val.password===this.password){
              this.server.setCurrentAdmin(val.id)
              this.router.navigate(['/admin']);
              return;
            }
          }
          console.log("Couldn't log in");
        },
        error:()=>{console.log("Some error occured");}
      }
    )
    }
    else{
      this.server.verifyContrac().subscribe({
        next:(value)=>{
          for(let val of value){
            if(val.username===this.username && val.password===this.password){

              console.log("Logged In");
              return;
            }
          }
          console.log("Couldn't log in");
        },
        error:()=>{console.log("Some error occured");}
      }
      )
    }
  }
 
}
