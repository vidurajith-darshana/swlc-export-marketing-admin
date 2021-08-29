import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {constants} from '../../../constants/constants';

@Injectable({
    providedIn: 'root'
})
export class OperatorService {


    constructor(
        private httpClient: HttpClient
    ) {
    }

    public getAllOparator(pageno) {

        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });

        const url = `${constants.base_url + 'api/v1/user/operator/get-all?page=' + pageno + '&size=10 '}`;
        return this.httpClient.get(url, {headers});
    }

    public updateDeo(deoo) {
        let url = `${constants.base_url + 'api/v1/user/operator/update'}`;
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });

        // let asss = url+ deoo + {headers};
        console.log(deoo)

        return this.httpClient.put(url, deoo, {headers});
    }

    public deleteteDeo(id) {
        let url = `${constants.base_url + 'api/v1/user/operator/remove?id=' + id}`;
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });


        // let asss = url+ deoo + {headers};

        return this.httpClient.delete(url, {headers});
    }

    public createOperator(operator) {
        let url = `${constants.base_url + 'api/v1/user/operator/create'}`;
        let token = localStorage.getItem('access_token');

        const headers =
            new HttpHeaders({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            });

        return this.httpClient.post(url, operator, {headers});
    }
}
