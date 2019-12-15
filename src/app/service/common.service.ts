import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public tenCode: string;
  public pass: string;

  constructor() { 
    this.tenCode = '0000';
    this.pass = '0000';
  }
}
