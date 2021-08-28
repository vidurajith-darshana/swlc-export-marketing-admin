import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private httpClient: HttpClient) { }

  public getAllCategory(pageno) {

    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${constants.base_url + 'api/v1/admin/category/all?page=' + pageno + '&size=10 '}`;
    return this.httpClient.get(url,{headers});
  }

    public createCategory(category){
        let url = `${constants.base_url+'api/v1/admin/category/create'}`;
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer '+token,
                'Content-Type': 'application/json'
            });

        return this.httpClient.post(url,category,{headers});
    }

    public updateCategory(category){
        let url = `${constants.base_url+'api/v1/admin/category'}`;
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer '+token,
                'Content-Type': 'application/json'
            });

        return this.httpClient.put(url,category,{headers});
    }
}
