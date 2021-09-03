import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {constants} from '../../../constants/constants';
import {SharedService} from './shared-service';
import {NotifierService} from 'angular-notifier';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  constructor(
      private httpClient : HttpClient,
      private router : Router,
  ) { }

  public _adminLogin(userName,userPassword) :Observable<any>{
    const params = new URLSearchParams();
    params.append('username', userName);
    params.append('password', userPassword);
    params.append('grant_type', 'password');

    const headers =
        new HttpHeaders({
          'Authorization': 'Basic dXNlcjo=',
          'Content-Type': 'application/x-www-form-urlencoded'
        });

    const url = `${constants.base_url+ 'api/v1/authorize'}`;

    return  this.httpClient.post(url, params.toString(), {headers: headers});
  }

  public saveToken(data) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('token_type', data.token_type);
    localStorage.setItem('refresh_token', data.refresh_token);
  }

  public checkCredentials() {
    return localStorage.getItem('access_token');
  }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('refresh_token');
    window.location.reload();
  }

  public _getUserDetails(customerEmail):Observable<any> {
    const url = `${constants.base_url+ 'api/v1/user/getDetails/' + customerEmail}`;
    return this.httpClient.get(url);

  }

  public loggedIn(){
    return !!localStorage.getItem('access_token');
  }
}
