import { Component, OnInit } from '@angular/core';
import {Workers } from '../workers'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  tenName = 'koike';
  tenAddress = 'Osaka';
  workers: Workers = {
    id : '001',
    name : 'koike',
    day: ['' , '']
  };

  constructor() { }

  ngOnInit() {
  }

}
