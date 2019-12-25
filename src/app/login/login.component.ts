import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.keySet);
    if (this.chckTencd(this.keySet.key, this.keySet.secret)) {
      console.log('ログイン成功');
      this.router.navigate(['/list']);
    } else {
      console.log('ログイン失敗');
      this.keySet.key = '';
      this.keySet.secret = '';
      this.router.navigate(['']);
    }
  }
  private chckTencd(code: string, pass: string): boolean  {
    if(code !== '0000'  ||  pass !== '0000') {
      return false;
    }
    return true;
  }


}


