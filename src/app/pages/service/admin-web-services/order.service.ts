import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {constants} from '../../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    public getAllOrders(): Observable<any> {
        let token = localStorage.getItem('access_token');
        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token
            });

        return this.http.get(constants.base_url + 'api/v1/admin/order/get-all', {headers: headers});
    }

    public getTop10Orders(year: string, month: number): Observable<any> {
        let token = localStorage.getItem('access_token');
        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token
            });

        return this.http.get(constants.base_url + 'api/v1/admin/order/top?yr=' + year + '&mnth=' + month, {headers: headers});
    }

   public getOrderStatusRequest():Observable<any>{
       let token = localStorage.getItem('access_token');
       const headers =
           new HttpHeaders({
               'Authorization': 'Bearer ' + token
           });

       return this.http.get(constants.base_url + 'api/order/getOrderStatuses', {headers: headers});
    }

    public updateOrderStatus(orderRef:string,orderStatus:string):Observable<any>{
        let token = localStorage.getItem('access_token');
        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token
            });

        return this.http.post(constants.base_url + 'api/order/update/status/'+orderRef+'/'+orderStatus, '',{headers: headers});
    }
}
