import { Component ,OnInit} from '@angular/core';
import { ServerinfoService } from 'src/app/serverinfo.service';
import { CONTRAC } from 'CONTRAC';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  constructor(private server:ServerinfoService){}
  currentAdmin:number|undefined;
  contractodisplay:CONTRAC[]=[];
  ngOnInit(): void {
      this.currentAdmin = this.server.getCurrentAdmin()
      this.server.verifyContrac().subscribe({
        next:(value)=>{
          this.contractodisplay = value.filter((val)=>val.toreport === this.currentAdmin)
        }
      })
  }


}
