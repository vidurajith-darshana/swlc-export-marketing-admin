import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {


  constructor(
      private httpClient : HttpClient
  ) { }

  public getAllTestimonials(text){
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    const url = `${constants.base_url + 'api/v1/testimonial/getAll?search='+text}`;
    return this.httpClient.get(url,{headers});
  }

  public createTestimonials(testimonial){

    let url = `${constants.base_url+'api/v1/testimonial/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,testimonial,{headers});
  }

  public deleteTestimonials(id){
    let url = `${constants.base_url+'api/v1/testimonial/delete/'+id}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,'',{headers});
  }
}
