import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {


  constructor(
      private httpClient : HttpClient
  ) { }

  public createOperator(operator){
    let url = `${constants.base_url+'api/v1/user/operator/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,operator,{headers});
  }
}
