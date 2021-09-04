import {Component, OnInit} from '@angular/core';
import {CustomerReviewService} from "../service/admin-web-services/customer-review.service";
import {NotifierService} from "angular-notifier";

@Component({
    selector: 'app-customer-review-report',
    templateUrl: './customer-review-report.component.html',
    styleUrls: ['./customer-review-report.component.css']
})
export class CustomerReviewReportComponent implements OnInit {
    private reviewList: any = [];

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

    constructor(private apiService: CustomerReviewService,
                private notifierService: NotifierService) {
        this.config = {
            itemsPerPage: 1,
            currentPage: 1,
            totalItems: 0
        };

        let now = new Date();
        this.selectedYear = now.getFullYear().toString();
        this.selectedMonthId = now.getMonth();

        this.selectedMonth = this.months.find(month => month.id == this.selectedMonthId).name;
    }

    config: any;

    pageChanged(event) {
        this.config.currentPage = event;
        const pagno = this.config.currentPage - 1;
        this.getCustomerReviewList(pagno, this.selectedYear, this.selectedMonthId)
    }

    pageOfItems: Array<any>;

    ngOnInit(): void {
        this.getCustomerReviewList(0,this.selectedYear,this.selectedMonthId)
    }

    private getCustomerReviewList(pageNo, selectedYear: string, selectedMonthId: number) {
        if (this.selectedYear == 'Select Year..') {
            this.notifierService.notify('error', 'Please select the year are you interested in viewing the report.');
        } else if (this.selectedMonthId == null) {
            this.notifierService.notify('error', 'Please select the month are you interested in viewing the report.');
        } else {
            this.apiService.getAllCustomerReviews('', pageNo, selectedYear, selectedMonthId).subscribe((data) => {
                if (data['success']) {
                    this.reviewList = data['body'].content;
                    this.config.itemsPerPage = data['body'].size;
                    this.config.totalItems = data['body'].totalElements;
                } else {

                }
            }, error => {

            });
        }
    }

    changeYear(newSelectedYear: string) {
        this.selectedYear = newSelectedYear;
    }

    changeMonth(month: string) {
        this.selectedMonth = month['name'];
        this.selectedMonthId = month['id'];
    }


    search() {
        this.getCustomerReviewList(0,this.selectedYear,this.selectedMonthId)
    }
}
