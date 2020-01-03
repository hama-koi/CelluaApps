import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/Employee';
import { MatDialog} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { HttpClientService } from '../service/common.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private employee = new Employee('', '', '' , '' , '' , '');
   // アラートの押されたボタンの結果格納用
   // tslint:disable-next-line:no-inferrable-types
   private alertDialogResult = '';
   private empId = '';
   private usresInfo: any = {};
   private usresMaxId = '';
   private numId = 0;

   constructor(   private httpClientService: HttpClientService, public matDialog: MatDialog ) { }
   ngOnInit() {
    this.getMaxId();
   }

  onSubmit(event: string) {
    console.log('Submitted:' + JSON.stringify(this.employee));
    this.cnvNum(this.usresMaxId);
    const dialog = this.matDialog.open(ModalComponent, {
    data: {title: '登録確認' , message : '登録しますか？'},
    width : '450px',
    disableClose : false
     });
      // ボタンの結果を取得
    dialog.afterClosed().subscribe( (result: any) => {
        // 結果をセット
        this.alertDialogResult = result;
        let res: string;
        res = result;
        // 登録処理
        // tslint:disable-next-line:triple-equals
        if　(res == 'OK') {
          console.log('取得データは' +  JSON.stringify(this.employee));
          this.httpClientService
          .setUser(JSON.stringify(this.employee))
          .then(response => {
         // this.usresInfo = response;
         // this.usresMaxId = this.usresInfo.messages;
        })
        .catch(error => console.log(error));
          }
});
  }

  private getMaxId() {
  console.log('ID取得ソッド通過');
　 this.httpClientService
　.getEmpId()
　.then(response => {
  this.usresInfo = response;
  this.usresMaxId = this.usresInfo.messages;
})
.catch(error => console.log(error));
 }

 private cnvNum(strId: string) {
this.numId = Number(strId) + 1;
this.employee.id = String(this.numId);
 }
}
