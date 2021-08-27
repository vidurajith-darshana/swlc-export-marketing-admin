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

        return this.http.get(constants.base_url + 'api/order/getAll', {headers: headers});
    }

    public getTop10Orders(year: string, month: string): Observable<any> {
        let token = localStorage.getItem('access_token');
        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token
            });

        return this.http.get(constants.base_url + 'api/v1/admin/order/top?yr=' + year + '&mnth=' + month, {headers: headers});
    }
}
