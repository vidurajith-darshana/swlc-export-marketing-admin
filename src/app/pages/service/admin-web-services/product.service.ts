import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = 'http://18.141.138.171:8012/';

  constructor(private httpClient : HttpClient) { }

  public getProductList(pageNo){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${this.BASE_URL + 'api/v1/admin/product/all?page=' + pageNo + '&size=10 '}`;
    return this.httpClient.get(url,{headers});
  }

  public createProduct(product){
    let url = `${this.BASE_URL+'api/v1/admin/product/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,product,{headers});
  }

  public updateProduct(product){
    let url = `${this.BASE_URL+'api/v1/admin/product/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.put(url,product,{headers});
  }

  public updateProductStatus(productId,productStatus){
    let url = `${this.BASE_URL+'api/v1/admin/product/update/status?productId='+productId+'&productStatus='+productStatus}`;
    let token = localStorage.getItem('access_token');
    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token
        });

    return this.httpClient.put(url,'',{headers});
  }

  public updateProductQty(productId,qty){
    let url = `${this.BASE_URL+'api/v1/admin/product/update/currentqty?productId='+productId+'&currentQty='+qty}`;
    let token = localStorage.getItem('access_token');
    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token
        });

    return this.httpClient.put(url,'',{headers});
  }
}
