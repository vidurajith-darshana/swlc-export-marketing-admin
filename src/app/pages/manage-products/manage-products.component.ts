import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

    constructor() {

    }


    product = [
        {
            productId: 1121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 2121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Inactive',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 3121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 4121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 5121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },
        {
            productId: 121321,
            productName: 'Cumin Powder',
            productThumbnail: 'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A',
            productCode: 1454665,
            productPrice: '$ 9.56',
            productStatus: 'Active',
            totalQty: '200',
            curruntQty: '150'
        },

    ]

    pageOfItems: Array<any>;
    ngOnInit(): void {

    }


    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
