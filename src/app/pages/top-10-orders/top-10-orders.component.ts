import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrderService} from '../service/admin-web-services/order.service';
import {ProductService} from '../service/admin-web-services/product.service';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-tables',
    templateUrl: './top-10-orders.component.html',
    styleUrls: ['./top-10-orders.component.scss']
})
export class Top10OrdersComponent implements OnInit {

    orders: Array<any> = [];
    orderDetails: Array<any> = [];

    years: string[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021','2022'];
    months: any[] = [{name: 'January', id: 1}, {name: 'February', id: 2}, {name: 'March', id: 3}, {name: 'April', id: 4}, {
        name: 'May',
        id: 5
    }, {name: 'June', id: 6}, {name: 'July', id: 7}, {name: 'August', id: 8}, {name: 'September', id: 9}, {
        name: 'October',
        id: 10
    }, {name: 'November', id: 11}, {name: 'December', id: 12}];

    selectedYear: string = 'Select Year..';
    selectedMonth: string = 'Select Month..';
    selectedMonthId: number;


    constructor(private orderService: OrderService, private modalService: NgbModal, private notifierService: NotifierService) {
        let now = new Date();
        this.selectedYear = now.getFullYear().toString();
        this.selectedMonthId = now.getMonth();

        this.selectedMonth = this.months.find(month => month.id == this.selectedMonthId).name;

    }

    ngOnInit() {
        this.getTop10Products();
    }


    getTop10Products() {
        if (this.selectedYear == 'Select Year..') {
            this.notifierService.notify('error', 'Please select the year are you interested in viewing the report.');
        } else if (this.selectedMonthId == null) {
            this.notifierService.notify('error', 'Please select the month are you interested in viewing the report.');
        } else {
            this.orderService.getTop10Orders(this.selectedYear, this.selectedMonthId).subscribe(
                res => {
                    if (res['success']) {
                        this.orders = res['body'];
                    } else {
                        this.notifierService.notify('error','Something went wrong. Please try again!');
                    }
                }, error => {
                    this.notifierService.notify('error','Something went wrong. Please try again!');
                }
            );
        }
    }

    open(content, orderDetails) {
        this.orderDetails = orderDetails;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }


    changeYear(newSelectedYear: string) {
        this.selectedYear = newSelectedYear;
    }

    changeMonth(month: string) {
        this.selectedMonth = month['name'];
        this.selectedMonthId = month['id'];
    }

}
