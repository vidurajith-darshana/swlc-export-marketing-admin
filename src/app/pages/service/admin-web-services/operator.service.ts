import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private BASE_URL = 'http://18.141.138.171:8012/';

  constructor(
      private httpClient : HttpClient
  ) { }

  public createOperator(operator){
    let url = `${this.BASE_URL+'api/v1/user/operator/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,operator,{headers});
  }
}
