import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.keySet);
    if (this.chckTencd(this.keySet.key) && this.chckPass(this.keySet.secret)) {

    }else{
      
    }
  }
  private chckTencd(code: string): boolean  {
    if(code !== '0000') {
      return false;
    }
    return true;
  }
  private  chckPass(pass: string): boolean  {
    if(pass !== '0000' ) {
      return false;
    }
    return true;
  }

}


