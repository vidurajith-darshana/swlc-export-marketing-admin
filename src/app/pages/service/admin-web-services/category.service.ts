import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL = 'http://103.125.216.56:8012/';

  constructor(private httpClient: HttpClient) { }

  public getAllCategory(pageno) {

    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${this.BASE_URL + 'api/v1/admin/category/all?page=' + pageno + '&size=10 '}`;
    return this.httpClient.get(url,{headers});
  }
}
