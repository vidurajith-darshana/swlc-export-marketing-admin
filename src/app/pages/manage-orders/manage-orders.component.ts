import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../service/admin-web-services/order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotifierService} from 'angular-notifier';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-manage-orders',
    templateUrl: './manage-orders.component.html',
    styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit,AfterViewInit {

    constructor(private orderService: OrderService, private modalService: NgbModal, private notifierService: NotifierService) {
    }

    @ViewChild('searchElement', {static: true}) searchElement: ElementRef;

    orders: Array<any> = [];
    orderDetails: Array<any> = [];
    selectedOrder: any;

    orderStatus: Array<any> = ['REVIEWING',
        'IN_PROGRESS',
        'DISPATCHED',
        'DELIVERED'];

    selectedOrderStatus: string = 'Select Order Status';

    model : any;

    searchWord:string = "";

    ngOnInit(): void {
        this.getAllOrders();
        // this.getOrderStatus();
    }


    getAllOrders() {

        this.orderService.getAllOrders(this.searchWord).subscribe(
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

    ngAfterViewInit(): void {

        fromEvent(this.searchElement.nativeElement, 'keyup').pipe(
            // get value
            map((event: any) => {

                if (event.target.value.length == 0) {
                    this.getAllOrders();
                }
                return event.target.value;
            })

            , filter(res => res.length > 1)

            , debounceTime(1000)

            , distinctUntilChanged()

        ).subscribe((text: string) => {
            this.getAllOrders();
        });

    }
}
