import { Component,OnInit } from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { ENTRY } from 'ENTRY';
import { ActivatedRoute } from '@angular/router';
import { CONTRAC } from 'CONTRAC';
@Component({
  selector: 'app-viewentries',
  templateUrl: './viewentries.component.html',
  styleUrls: ['./viewentries.component.css']
})
export class ViewentriesComponent implements OnInit{
  currentContrac?:number;
  entryArray:ENTRY[]=[];
  oldesttop:ENTRY[]=[];
  currentContracInfo:CONTRAC={ 
    username:"",
    password:"",
    toreport:0,
    contracname:"",
    projecttitle:"",
    projectdesc:"",
    projectstatus:""};
  constructor(private server:ServerinfoService,private activeroute:ActivatedRoute){}
  ngOnInit(): void {
      this.activeroute.paramMap.subscribe({
        next:(params)=>{
          this.currentContrac = params.get('id') as unknown as number;
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
}
