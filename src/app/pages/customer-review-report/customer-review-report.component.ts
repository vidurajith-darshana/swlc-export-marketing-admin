import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-review-report',
  templateUrl: './customer-review-report.component.html',
  styleUrls: ['./customer-review-report.component.css']
})
export class CustomerReviewReportComponent implements OnInit {

  constructor() { }

  report = [
    {
       customer: 'frfrfff',
        compalintype: 'fefhekhffjff',
        message: 'defhfghfhfhhf'
    },
  ]


  viewreport: Array<any>;
    ngOnInit(): void {

    }


    onChangePage(viewreport: Array<any>) {
        // update current page of items
        this.viewreport = viewreport;
    }

 

}
