import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class CustomerReviewService {


    constructor(private httpClient: HttpClient) {
    }

    public getAllCategory(text, pageno) {

        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });

        const url = `${constants.base_url + 'api/v1/admin/category/all?search=' + text + '&page=' + pageno + '&size=10 '}`;
        return this.httpClient.get(url, {headers});
    }

    getAllCustomerReviews(text, pageno, selectedYear: string, selectedMonthId: number) {
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });
        const url = `${constants.base_url + 'api/v1/user/customer/reviews?yr=' + selectedYear + '&mnth=' + selectedMonthId + '&page=' + pageno + '&size=10'}`;
        return this.httpClient.get(url, {headers});
    }
}
