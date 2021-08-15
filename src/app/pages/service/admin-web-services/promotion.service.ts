import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private BASE_URL = 'http://18.141.138.171:8012/';

  constructor(private httpClient : HttpClient) { }

  public getAllPromotions(pageNo){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${this.BASE_URL + 'api/v1/admin/promotion/all?page=' + pageNo + '&size=10 '}`;
    return this.httpClient.get(url,{headers});
  }

  public createPromotion(promotion){
    let url = `${this.BASE_URL+'api/v1/admin/promotion/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,promotion,{headers});
  }

  public updatePromotion(promotion){
    let url = `${this.BASE_URL+'api/v1/admin/promotion/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,promotion,{headers});
  }

  public deletePromotions(promotionId){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${this.BASE_URL + 'api/v1/admin/promotion/delete/'+promotionId}`;
    return this.httpClient.delete(url,{headers});
  }

  public updatePromotionStatus(promotionId,promotionStatus){
    let url = `${this.BASE_URL+'api/v1/admin/promotion/update/'+promotionId+'/status?status='+promotionStatus}`;
    let token = localStorage.getItem('access_token');
    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token
        });

    return this.httpClient.put(url,'',{headers});
  }
}
