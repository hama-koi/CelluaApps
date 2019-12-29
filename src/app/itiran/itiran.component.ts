import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/common.service';

@Component({
  selector: 'app-itiran',
  templateUrl: './itiran.component.html',
  styleUrls: ['./itiran.component.css']
})
export class ItiranComponent implements OnInit {
  /**
   * バックエンドから返却されたレスポンスをセットするプロパティ
   *
   * 型は any ではなく class で型を定義した方が良いが
   * ここでは簡便さから any としておく
   *
   * @ private
   * @ type {string}
   * @ memberof HttpClientComponent
   */
  public param: any = {};

  /**
   * バックエンドから返却されたたメッセージをセットするプロパティ
   *
   * @ type {*}
   * @ memberof HttpClientComponent
   */
  public messageInfo: any = {
    first_name: null,
    last_name: null
  };

  /**
   * バックエンドから返却されたたメッセージを保持するリストプロパティ
   *
   * @ type {*}
   * @ memberof HttpClientComponent
   */
  public messageInfoList: any = [this.messageInfo];

  /**
   * 入力メッセージ
   *
   * @ type {string}
   * @ memberof HttpClientComponent
   */
  // tslint:disable-next-line:no-inferrable-types
  public message: string = 'miss!!!';

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    // ------
    // toPromise.then((res) =>{}) を利用する場合のコード
    // ------
    this.httpClientService
      .get()
      .then(response => {
        this.param = response;
        this.messageInfoList = this.param.messages;
      })
      .catch(error => console.log(error));
  }
}
