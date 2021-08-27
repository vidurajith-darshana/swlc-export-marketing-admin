import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {ProductService} from '../service/admin-web-services/product.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  public dashData : any;

  constructor(private productService:ProductService,private notifierService:NotifierService) {
    this.getDashboardData();
  }

  ngOnInit() {

  }

  getDashboardData(){
    this.productService.getDashboardData().subscribe(
        res=>{
          if(res['success']){
            this.dashData = res['body'];
          }else{
            this.notifierService.notify('error','Something went wrong. Please try again!');
          }
        },error => {
          this.notifierService.notify('error','Something went wrong. Please try again!');
        }
    )
  }

}
