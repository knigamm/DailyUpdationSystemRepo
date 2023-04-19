import { Component,Input,OnInit } from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { ENTRY } from 'ENTRY';
import { ActivatedRoute,Router } from '@angular/router';
import { CONTRAC } from 'CONTRAC';
import { LOGIN } from 'LOGIN';
@Component({
  selector: 'app-viewentries',
  templateUrl: './viewentries.component.html',
  styleUrls: ['./viewentries.component.css']
})
export class ViewentriesComponent implements OnInit{
  currentAdminId:number|undefined;
  currentAdminInfo:LOGIN={username:"",password:"",adminname:""};
  currentContrac?:number;
  entryArray:ENTRY[]=[];
  oldesttop:ENTRY[]=[];
  order:string='newest';
  order_check:boolean = true;
  currentContracInfo:CONTRAC={ 
    username:"",
    password:"",
    toreport:0,
    contracname:"",
    projecttitle:"",
    projectdesc:"",
    projectstatus:""};
  constructor(private server:ServerinfoService,private activeroute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
      this.activeroute.paramMap.subscribe({
        next:(params)=>{
          this.currentContrac = params.get('id') as unknown as number;
        }
      })
      
      this.currentAdminId=this.activeroute.snapshot.queryParams['info'];
      this.server.getAdminInfo(this.currentAdminId).subscribe({
        next:(value)=>{
          this.currentAdminInfo = value;
        }
      })

      this.server.getContracInfo(this.currentContrac).subscribe({
        next:(value)=>{this.currentContracInfo = value}
      })
      this.server.getEntries().subscribe({
        next:(value)=>{
          this.entryArray = value.filter((val)=>val.entryby == this.currentContrac)

          this.oldesttop = this.entryArray.sort((a,b)=>(new Date(a.entrydate).getTime()) - (new Date(b.entrydate).getTime()));
          console.log(this.oldesttop);
        }
      
        })
    }

    reviewbtn(entry:ENTRY){
      if(entry.status=="pending"){
        entry.status="reviewed";
        this.server.markreview(entry).subscribe();
      }
    }
    onSubmit(){
      this.order_check=(this.order=='newest')? true:false;
    }
    onLogout(){
      
      this.router.navigate([''])
    }
    onBack(){
      this.router.navigate(['/admin',this.currentAdminInfo.id])
    }
}
