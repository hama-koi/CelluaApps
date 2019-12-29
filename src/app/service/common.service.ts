import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService  {
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null
  };

  /**
   * RST-API 実行時に指定する URL
   *
   * バックエンドは Express で実装し、ポート番号「3000」で待ち受けているため、
   * そのまま指定すると CORS でエラーになる
   * それを回避するため、ここではフロントエンドのポート番号「4200」を指定し、
   * Angular CLI のリバースプロキシを利用してバックエンドとの通信を実現する
   *
   * @ private
   * @ memberof  HttpClientService
   */
  // tslint:disable-next-line:no-inferrable-types
  private host: string = 'http://localhost:3000';
  // 'http://localhost:4200/app';

  constructor(private http: HttpClient) {
        // `Authorization` に `Bearer トークン` をセットする
        this.setAuthorization('my-auth-token');
  }

  public get(): Promise<any[]> {
    return this.http.get(this.host + '/api', this.httpOptions)
    .toPromise()
    .then((res) => {
      // response の型は any ではなく class で型を定義した方が良いが
      // ここでは簡便さから any としておく

      // @angular/http では json() でパースする必要があったが､ @angular/common/http では不要となった
      // const response: any = res.json();
      const response: any = res;
      return response;
    })
    .catch(this.errorHandler);
  }
  /**
   * REST-API 実行時のエラーハンドラ
   * (toPromise.then((res) =>{}) を利用する場合のコード)
   *
   * @ private
   * @ param {any} err エラー情報
   * @ memberof HttpClientService
   */
  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }

  /**
   * Authorizatino に認証トークンを設定しする
   *
   * @ param {string} token 認証トークン
   * @ returns {void}
   * @ memberof HttpClientService
   * @ description
   * トークンを動的に設定できるようメソッド化している
   * Bearer トークンをヘッダに設定したい場合はこのメソッドを利用する
   */
  public setAuthorization(token: string = null): void {
    if (!token) {
      return;
    }
    // tslint:disable-next-line:no-inferrable-types
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', bearerToken);
  }





}

