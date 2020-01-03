import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/common.service';
import { MatDialog  } from '@angular/material/dialog';
import {DaialogComponent } from './daialog/daialog.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
 public   addMesseage: string;

  constructor(private httpClientService: HttpClientService, private dialog: MatDialog
    ) { }

  public info: any = { };
  public messageInfo: any = {
    message: 'データ取得' };

  public infoList: any = [this.messageInfo];
  public addInfoList: any = [];
  ngOnInit() {
    this.httpClientService
      .getInfo()
      .then(response => {
        this.info = response;
        this.infoList = this.info.messages;
      })
      .catch(error => console.log(error));
  }

  // ダイアログ表示
  openDialog(): void {
    const dialogRef = this.dialog.open(DaialogComponent, {
      width: '450px',
      data: {addMesseage: null}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      this.addMesseage = result;
      this.addInfoList.push(this.addMesseage);
      this.setInfoMessage(result.addMesseage);
      }
    });
}
private setInfoMessage(addInfo: string) {
  console.log(addInfo + 'メソッド通過');
  this.httpClientService
  .setInfo(addInfo)
  .then(response => {
console.log(response);
  })
  .catch(error => console.log(error));
}
}
