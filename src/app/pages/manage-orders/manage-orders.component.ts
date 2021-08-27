import {Component, OnInit} from '@angular/core';
import {OrderService} from '../service/admin-web-services/order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-manage-orders',
    templateUrl: './manage-orders.component.html',
    styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

    constructor(private orderService: OrderService, private modalService: NgbModal, private notifierService: NotifierService) {
    }

    orders: Array<any> = [];
    orderDetails: Array<any> = [];
    selectedOrder: any;

    orderStatus: Array<any> = ['REVIEWING',
        'IN_PROGRESS',
        'DISPATCHED',
        'DELIVERED'];

    selectedOrderStatus: string = 'Select Order Status';

    model : any;

    ngOnInit(): void {
        this.getAllOrders();
        // this.getOrderStatus();
    }


    getAllOrders() {
        this.orderService.getAllOrders().subscribe(
            res => {
                if (res['success']) {
                    this.orders = res['body'];
                } else {
                    this.notifierService.notify('error', 'Something went wrong. Please try again!');
                }
            }, error => {
                this.notifierService.notify('error', 'Something went wrong. Please try again!');
            }
        );
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        // this.pageOfItems = pageOfItems;
    }

    open(content, orderDetails) {
        this.orderDetails = orderDetails;
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    openChangeOrderStatusModel(content, order) {
        this.selectedOrderStatus = order['status'];
        this.selectedOrder = order;
        this.model=  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    updateOrderStatus() {
        if (this.selectedOrder['orderRef'] != null) {
            this.orderService.updateOrderStatus(this.selectedOrder['orderRef'], this.selectedOrderStatus).subscribe(
                res => {
                    this.model.close();
                    if (res['success']) {
                        this.notifierService.notify('success', 'Order status has been successfully updated!');
                    } else {
                        this.notifierService.notify('error', 'Sorry, Failed to update order status!');
                    }
                }, error => {
                    this.model.close();
                    this.notifierService.notify('error', 'Something went wrong. Please try again!');
                }
            );
        }else{
            this.notifierService.notify('error', 'Sorry, Order REF cannot be null.');
        }
    }

    public getOrderStatus() {
        this.orderService.getOrderStatusRequest().subscribe(
            res => {
                if (res['success']) {
                    this.orderStatus = res['body'];
                } else {
                    this.notifierService.notify('error', 'Something went wrong. Please try again!');
                }
            }, error => {
                this.notifierService.notify('error', 'Something went wrong. Please try again!');
            }
        );
    }

    changeOrderStatus(orderStatus) {
        this.selectedOrderStatus = orderStatus;
    }
}
