import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

constructor() { }

manageorder =[
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
    {orderId:'425647',orderDate:'12/05/21',billToName:'A.B.Annar',orderstatus:'Completed',message:'ehfjfg hjghjgfhfg gffhgyfgfgf',grandTotal:'$ 123.012'},
  ]

  ngOnInit(): void {
  }

}
