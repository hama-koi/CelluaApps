import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  addMesseage: string;
}
@Component({
  selector: 'app-daialog',
  templateUrl: './daialog.component.html',
  styleUrls: ['./daialog.component.css']
})
export class DaialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<DaialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
}
