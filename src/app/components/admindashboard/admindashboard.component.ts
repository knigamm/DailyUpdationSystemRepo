import { Component ,OnInit} from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { CONTRAC } from 'CONTRAC';
import { ActivatedRoute,Router } from '@angular/router';
import { LOGIN } from 'LOGIN';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  constructor(private server:ServerinfoService,private activeroute:ActivatedRoute,private route:Router){}
  currentAdmin:number|undefined;



  contractodisplayongoing:CONTRAC[]=[];
  contractodisplaycompleted:CONTRAC[]=[];
  currentAdminInfo:LOGIN={username:"",password:"",adminname:""};
  ngOnInit(): void {
    this.activeroute.paramMap.subscribe((params)=>{
      this.currentAdmin = params.get('id') as unknown as number;
    })
    this.server.getAdminInfo(this.currentAdmin).subscribe({
      next:(value)=>{
        this.currentAdminInfo = value;
      }
    })

      this.server.verifyContrac().subscribe({
        next:(value)=>{
          this.contractodisplayongoing = value.filter((val)=>val.toreport == this.currentAdmin && val.projectstatus == "Ongoing");
          this.contractodisplaycompleted = value.filter((val)=>(val.toreport == this.currentAdmin && val.projectstatus == "Completed"));     
        }
      })

  }

  onLogout(){
    this.route.navigate(['']);
  }


}