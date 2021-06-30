import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL = 'http://103.125.216.56:8012/';

  constructor(private httpClient : HttpClient) { }

  public getAllCategory(pageno){
    let url = `${this.BASE_URL+'api/v1/user/category/all?page=' + pageno + '&size=10 '}`;
    return this.httpClient.get(url);
  }
}
