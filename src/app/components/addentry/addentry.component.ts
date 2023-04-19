import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-addentry',
  templateUrl: './addentry.component.html',
  styleUrls: ['./addentry.component.css']
})
export class AddentryComponent {
  title:string='';
  desc:string='';
  constructor(private dialogRef: MatDialogRef<AddentryComponent>){}
  save() {
    const returnobj={entrytitle:this.title,entrydesc:this.desc};
    this.dialogRef.close(returnobj);
}

close() {
    this.dialogRef.close();
}
}
