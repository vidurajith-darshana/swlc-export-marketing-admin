import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {


  constructor(private httpClient : HttpClient) { }

  public getAllPromotions(pageNo){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${constants.base_url + 'api/v1/admin/promotion/all?page=' + pageNo + '&size=10'}`;
    return this.httpClient.get(url,{headers});
  }

  public createPromotion(promotion){
    let url = `${constants.base_url+'api/v1/admin/promotion/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,promotion,{headers});
  }

  public updatePromotion(promotion){
    let url = `${constants.base_url+'api/v1/admin/promotion/update'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.put(url,promotion,{headers});
  }

  public deletePromotions(promotionId){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${constants.base_url + 'api/v1/admin/promotion/delete/'+promotionId}`;
    return this.httpClient.delete(url,{headers});
  }

  public updatePromotionStatus(promotionId,promotionStatus){
    let url = `${constants.base_url+'api/v1/admin/promotion/update/'+promotionId+'/status?status='+promotionStatus}`;
    let token = localStorage.getItem('access_token');
    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token
        });

    return this.httpClient.put(url,'',{headers});
  }
}
