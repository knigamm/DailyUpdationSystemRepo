import { Component ,OnInit} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { ENTRY } from 'ENTRY';
import { CONTRAC } from 'CONTRAC';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AddentryComponent } from '../addentry/addentry.component';
@Component({
  selector: 'app-contracdashboard',
  templateUrl: './contracdashboard.component.html',
  styleUrls: ['./contracdashboard.component.css']
})
export class ContracdashboardComponent implements OnInit{

  currentContrac:number|undefined;
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
  constructor(private router:Router,private activeroute:ActivatedRoute,private server:ServerinfoService,private dialog:MatDialog){}
  onLogout(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe({
      next:(params)=>{this.currentContrac=params.get('id') as unknown as number}
    })
    this.server.getContracInfo(this.currentContrac).subscribe({
      next:(value)=>{this.currentContracInfo=value}
    })

    this.server.getEntries().subscribe({
      next:(value)=>{
        this.entryArray = value.filter((val)=>val.entryby == this.currentContrac)

        this.oldesttop = this.entryArray.sort((a,b)=>(new Date(a.entrydate).getTime()) - (new Date(b.entrydate).getTime()));
      }
    
      })
  }
  onAddEntry(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='600px';
    dialogConfig.height='300px';
    const dialogRef=this.dialog.open(AddentryComponent,dialogConfig);

    dialogRef.afterClosed().subscribe({
      next:(data)=>{
        if(data.entrytitle!='' && data.entrydesc!=''){
        const currentdate=new Date();
        const obj={
          entryby:this.currentContrac,
          entrydate:`${currentdate.getFullYear()}-${currentdate.getMonth()+1}-${currentdate.getDate()}`,
          status:'pending'
        }
        const obj2:ENTRY={...obj,...data}
        this.server.addEntry(obj2).subscribe();
        this.entryArray.push(obj2);
        this.oldesttop = this.entryArray.sort((a,b)=>(new Date(a.entrydate).getTime()) - (new Date(b.entrydate).getTime()));
      }
    }
    })
  }
}
