import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from '../service/admin-web-services/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private userName : string;
  private userPassword : string;

  constructor(
      private adminLoginService : AdminLoginService
  ) { }

  ngOnInit(): void {
  }

  _adminLogin(){
    this.adminLoginService._adminLogin(this.userName,this.userPassword);
  }

}
