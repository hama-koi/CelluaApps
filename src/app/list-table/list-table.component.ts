import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickShift() {
    console.log('シフトボタンが押下されました');
    this.router.navigate(['/shift']);
}
  onClickItiran(){
    console.log('従業員一覧が押下されました ');
    this.router.navigate(['/itiran']);
  }
  onClickEmpUpt() {
    console.log('従業員登録が押下されました');
    this.router.navigate(['/empRegsist']);
  }
}
