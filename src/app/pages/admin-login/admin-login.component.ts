import { Component, OnInit } from '@angular/core';
import {AdminLoginService} from '../service/admin-web-services/admin-login.service';
import {NotifierService} from 'angular-notifier';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private userName : string;
  private userPassword : string;

  constructor(
      private adminLoginService : AdminLoginService,
      private notifierService:NotifierService,
      private router:Router
  ) { }

  ngOnInit(): void {
  }

  _adminLogin(){
    this.adminLoginService._adminLogin(this.userName,this.userPassword).subscribe((data) => {
          this.adminLoginService.saveToken(data);
          this.adminLoginService._getUserDetails(this.userName);
          this.router.navigate(['/dashboard']);
          }, err => {
        this.notifierService.notify('error','You have entered invalid email or password. Please try again!')
        }
    );
  }

}
