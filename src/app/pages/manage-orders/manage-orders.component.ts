import { Component, OnInit } from '@angular/core';
import {OrderService} from '../service/admin-web-services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

constructor(private orderService:OrderService) { }

    orders: Array<any> = [];

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders(){
    this.orderService.getAllOrders().subscribe(
        res=>{
          if (res['success']){
            this.orders = res['body'];
          }else{
            alert("Something went wrong. Please try again!")
          }
        },error => {
          alert("Something went wrong. Please try again!")
        }
    )
  }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        // this.pageOfItems = pageOfItems;
    }
}
