import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

import { EmployeesComponent } from './employees/employees.component';
import { ListTableComponent } from './list-table/list-table.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/common.service';
import { ItiranComponent } from './itiran/itiran.component';

const ROUTE_TABLE: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: ListTableComponent},
  {path: 'itiran', component: ItiranComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    ListTableComponent,
    HeaderComponent,
    ItiranComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(ROUTE_TABLE),
    HttpClientModule,
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
