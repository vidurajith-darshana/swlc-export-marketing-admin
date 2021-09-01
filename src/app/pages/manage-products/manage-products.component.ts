import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/admin-web-services/product.service';
import {Product} from '../model/product';
import {CategoryService} from '../service/admin-web-services/category.service';
import {Category} from '../model/category';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string = '';

    updateImageError: string;
    updateIsImageSaved: boolean;
    updateCardImageBase64: string;

    addProductName: string = '';
    addProductPrice: string = '';
    addProductCode: string = '';
    addTotalQty: number = 0;
    addCurrentQty: number = 0;

    updateProductId: number;
    updateProductName: string = '';
    updateProductPrice: string = '';
    updateProductCode: string = '';
    updateTotalQty: number = 0;
    updateCurrentQty: number = 0;
    updateProductStatus: number = 0;


    productList: Product[];
    categoryList: Category[];
    categoryList2: Category[];

    selectedCategory: Category;
    selectedUpdateCategory: Category;

    selectCategoryList = new Array();

    updateCategoryList = new Array();

    customSearchText: string = '';

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private notifierService: NotifierService,
    ) {

    }

    pageOfItems: Array<any>;

    ngOnInit(): void {
        this._getAllProducts(0);
        this._getCategoryList();
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

    updateFileChangeEvent(fileInput: any) {
        this.updateImageError = null;
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
                        this.updateCardImageBase64 = imgBase64Path;
                        this.updateIsImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    _getAllProducts(pageNo) {
        this.productService.getProductList('', pageNo).subscribe((data) => {
            if (data['success']) {
                this.productList = data['body'].content;
            } else {

            }
        }, error => {

        });
    }

    productCustomSearch() {
        if (this.customSearchText !== '') {
            this.productService.getProductList(this.customSearchText, 0).subscribe((data) => {
                if (data['success']) {
                    this.productList = data['body'].content;
                } else {

                }
            }, error => {

            });
        } else {
            this._getAllProducts(0);
        }
    }

    _getCategoryList() {
        this.categoryService.getAllCategory('', 0).subscribe((data) => {
            if (data['success']) {
                this.categoryList = data['body'].content;
                this.categoryList2 = data['body'].content;
            } else {
                this.notifierService.notify('error', data['message']);
            }
        }, error => {
            this.notifierService.notify('error', 'Category not found');
        });
    }

    _addToTable() {
        console.log(this.selectedCategory.name);

        let data = {
            id: this.selectedCategory.id,
            name: this.selectedCategory.name
        };

        this.selectCategoryList.push(data);
    }

    _addToUpdateTable() {

        let data = {
            id: this.selectedUpdateCategory.id,
            name: this.selectedUpdateCategory.name
        };

        this.updateCategoryList.push(data);
    }

    _removeCategory(id) {
        let item = this.selectCategoryList.find(name => name.id === id);
        if (item !== null) {
            this.selectCategoryList.splice(this.productList.indexOf(item), 1);
        }
    }

    _removeUpdateCategory(id) {
        let item = this.updateCategoryList.find(name => name.id === id);
        if (item !== null) {
            this.updateCategoryList.splice(this.productList.indexOf(item), 1);
        }
    }

    _addProduct() {

        let categoryId = new Array();

        for (let i in this.selectCategoryList) {

            let object = {
                id: this.selectCategoryList[i].id
            };

            categoryId.push(object);
        }

        let data = {
            code: this.addProductCode,
            name: this.addProductName,
            thumbnail: this.cardImageBase64,
            price: this.addProductPrice,
            totalQty: this.addTotalQty,
            currentQty: this.addCurrentQty,
            categories: categoryId
        };

        this.productService.createProduct(data).subscribe((data) => {
            if (data['success']) {
                this.notifierService.notify('success', 'Product add success');
                this._clearText();
                this._getAllProducts(0);
            } else {
                this.notifierService.notify('error', 'Product add failed');
            }
        }, error => {
            this.notifierService.notify('error', 'Product add failed');
        });

    }

    checkValidation() {
        if (this.addProductName !== '') {
            if (this.addProductCode !== '') {
                if (this.addProductPrice !== '') {
                    if (this.addTotalQty !== 0) {
                        if (this.addCurrentQty !== 0) {
                            if (this.selectCategoryList.length > 0) {
                                if (this.cardImageBase64 !== '') {
                                    this._addProduct();
                                } else {
                                    this.notifierService.notify('error', 'Please select the image');
                                }
                            } else {
                                this.notifierService.notify('error', 'Please select the category');
                            }
                        } else {
                            this.notifierService.notify('error', 'Please enter Product current quantity');
                        }
                    } else {
                        this.notifierService.notify('error', 'Please enter Product total quantity');
                    }
                } else {
                    this.notifierService.notify('error', 'Please enter Product price');
                }
            } else {
                this.notifierService.notify('error', 'Please enter Product code');
            }
        } else {
            this.notifierService.notify('error', 'Please enter Product name');
        }
    }

    _clearText() {
        this.addProductName = '';
        this.addProductCode = '';
        this.addProductPrice = '';
        this.addTotalQty = 0;
        this.addCurrentQty = 0;
        this.selectCategoryList = new Array();
        this.cardImageBase64 = '';
        this._getCategoryList();
    }

    _loadDetailsToUpdate(id, name, code, price, image, totalQty, currentQty, status, categoryList) {
        this.updateProductId = id;
        this.updateProductName = name;
        this.updateProductCode = code;
        this.updateProductPrice = price;
        this.updateCardImageBase64 = image;
        this.updateTotalQty = totalQty;
        this.updateCurrentQty = currentQty;
        this.updateProductStatus = status;

        this.updateCategoryList = [];

        for (let i in categoryList) {
            let object = {
                id: categoryList[i].id,
                name: categoryList[i].name
            };

            this.updateCategoryList.push(object);
        }
    }

    _updateProduct() {

        let categoryId = new Array();

        for (let i in this.updateCategoryList) {

            let object = {
                id: this.updateCategoryList[i].id
            };

            categoryId.push(object);
        }

        let data = {
            id: this.updateProductId,
            code: this.addProductCode,
            name: this.addProductName,
            thumbnail: this.cardImageBase64,
            price: this.addProductPrice,
            totalQty: this.addTotalQty,
            currentQty: this.addCurrentQty,
            categories: categoryId
        };

        this.productService.updateProduct(data).subscribe((data) => {
            if (data['success']) {
                this.notifierService.notify('success', 'Product update success');
                this._clearText();
                this._getAllProducts(0);
            } else {
                this.notifierService.notify('error', 'Product update failed');
            }
        }, error => {
            this.notifierService.notify('error', 'Product update failed');
        });

    }
}
