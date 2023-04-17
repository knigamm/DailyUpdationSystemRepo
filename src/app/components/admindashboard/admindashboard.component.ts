import { Component ,OnInit} from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { CONTRAC } from 'CONTRAC';
import { LOGIN } from 'LOGIN';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  constructor(private server:ServerinfoService){}
  currentAdmin:number|undefined;
  contractodisplay:CONTRAC[]=[];
  currentAdminInfo?:LOGIN;
  ngOnInit(): void {

    this.server.getAdminInfo(this.currentAdmin).subscribe({
      next:(value)=>{
        this.currentAdminInfo = value;
      }
    })


      this.currentAdmin = this.server.getCurrentAdmin()
      this.server.verifyContrac().subscribe({
        next:(value)=>{
          this.contractodisplay = value.filter((val)=>val.toreport === this.currentAdmin)
        }
      })
  }


}
