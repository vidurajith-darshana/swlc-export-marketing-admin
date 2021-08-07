import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private BASE_URL = 'http://103.125.216.56:8012/';

  constructor(
      private httpClient : HttpClient
  ) { }

  public getAllTestimonials(){
    let token = localStorage.getItem('access_token');

    // const headers =
    //     new HttpHeaders({
    //       'Authorization': 'Bearer '+token,
    //       'Content-Type': 'application/json'
    //     });

    const url = `${this.BASE_URL + 'api/v1/testimonial/getAll'}`;
    return this.httpClient.get(url);
  }

  public createTestimonials(testimonial){

    let url = `${this.BASE_URL+'api/v1/testimonial/create'}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,testimonial,{headers});
  }

  public deleteTestimonials(id){
    let url = `${this.BASE_URL+'api/v1/testimonial/delete/'+id}`;
    let token = localStorage.getItem('access_token');

    const headers =
        new HttpHeaders({
          'Authorization': 'Bearer '+token,
          'Content-Type': 'application/json'
        });

    return this.httpClient.post(url,'',{headers});
  }
}
