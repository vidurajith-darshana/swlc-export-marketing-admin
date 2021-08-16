import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/admin-web-services/product.service';

@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

    addProductName : string;
    addProductPrice : string;
    addProductCode : string;
    addTotalQty : number;

    constructor(
        private productService : ProductService
    ) {

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

    fileChangeEvent(fileInput: any) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const img_height = rs.currentTarget['height'];
                    const img_width = rs.currentTarget['width'];

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
}
