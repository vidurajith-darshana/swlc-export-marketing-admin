import {Component, AfterViewInit, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../service/admin-web-services/product.service';
import {Product} from '../model/product';
import {CategoryService} from '../service/admin-web-services/category.service';
import {Category} from '../model/category';
import {NotifierService} from 'angular-notifier';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit, AfterViewInit {

    @ViewChild('closebutton') closebutton;
    @ViewChild('closeAddProductbutton') closeAddProductbutton;

    @ViewChild('searchElement', {static: true}) searchElement: ElementRef;
    @ViewChild('takeInput', {static: false}) InputVar: ElementRef;
    @ViewChild('takeInputa', {static: false}) InputVara: ElementRef;

    @ViewChild('addImageInput', {static: false}) addImageInput: ElementRef;
    @ViewChild('updateImageInput', {static: false}) updateImageInput: ElementRef;

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

    updateImageError: string;
    updateIsImageSaved: boolean;
    updateCardImageBase64: string;

    addProductName: string;
    addProductPrice: string;
    addProductCode: string;
    addTotalQty: number = 0;
    addCurrentQty: number = 0;

    updateProductId: number;
    updateProductName: string;
    updateProductPrice: string;
    updateProductCode: string;
    updateTotalQty: number;
    updateCurrentQty: number;
    updateProductStatus: number;


    productList: Product[];
    categoryList: Category[];
    categoryList2: Category[];

    selectedCategory: Category;
    selectedUpdateCategory: Category;

    selectCategoryList = new Array();

    updateCategoryList = new Array();

    customSearchText: string = '';

    public visible = false;
    public visibleAnimate = false;

    constructor(
        private productService: ProductService,
        private categoryService: CategoryService,
        private notifierService: NotifierService,
    ) {
        this.config = {
            itemsPerPage: 1,
            currentPage: 1,
            totalItems: 0
        };
    }

    config: any;
    items = [];

    pageChanged(event) {
        this.config.currentPage = event;
        const pagno = this.config.currentPage - 1;
        this._getAllProducts(pagno);
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
                this.config.itemsPerPage = data['body'].size;
                this.config.totalItems = data['body'].totalElements;
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

        let data = {
            id: this.selectedCategory.id,
            name: this.selectedCategory.name
        };

        this.selectCategoryList.push(data);
    }

    _addToUpdateTable() {

        let item = this.updateCategoryList.find(name => name.id === this.selectedUpdateCategory.id);
        if (item === null) {
            let data = {
                id: this.selectedUpdateCategory.id,
                name: this.selectedUpdateCategory.name
            };

            this.updateCategoryList.push(data);
        } else {
            this.notifierService.notify('error', 'Category is already exist!');
        }
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
            thumbnail: this.cardImageBase64.split(',')[1],
            price: this.addProductPrice,
            totalQty: this.addTotalQty,
            currentQty: this.addCurrentQty,
            categories: categoryId
        };

        this.productService.createProduct(data).subscribe((data) => {
            if (data['success']) {
                this.notifierService.notify('success', 'Product has been successfully added!');
                this._clearText();
                this._getAllProducts(0);
                this.removebackdropAddProduct();

            } else {
                this.notifierService.notify('error', 'Product add failed');
            }
        }, error => {
            this.notifierService.notify('error', 'Product add failed');
        });

    }

    checkValidation() {
        if (this.addProductName !== undefined) {
            if (this.addProductCode !== undefined) {
                if (this.addProductPrice !== undefined) {
                    if (this.addTotalQty !== undefined) {
                        if (this.addCurrentQty !== 0) {
                            if (this.selectCategoryList.length > 0) {
                                if (this.cardImageBase64 !== undefined) {
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
        this.hideAddProduct();
    }

    _clearText() {

        this.addProductName = '';
        this.addProductCode = '';
        this.addProductPrice = '';

        this.addProductPrice = '';
        this.addProductCode = '';
        this.addTotalQty = 0;
        this.addCurrentQty = 0;

        this.InputVar.nativeElement.value = '';
        this.InputVara.nativeElement.value = '';
        this.addTotalQty = 0;
        this.addCurrentQty = 0;
        this.selectCategoryList = new Array();
        this._getCategoryList();
        this.removeImage();

        this.addImageInput.nativeElement.value = '';
        this.updateImageInput.nativeElement.value = '';

        this.updateProductPrice = '';
        this.updateProductCode = '';

        this.updateTotalQty = 0;
        this.updateCurrentQty = 0;

        this.imageError = "";
    }

    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }

    _loadDetailsToUpdate(id, name, code, price, image, totalQty, currentQty, status, categoryList) {
        this.updateProductId = id;
        this.updateProductName = name;
        this.updateProductCode = code;
        this.updateProductPrice = price;
        this.updateCardImageBase64 = null;
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

        let data: any;

        for (let i in this.updateCategoryList) {

            let object = {
                id: this.updateCategoryList[i].id
            };

            categoryId.push(object);
        }

        if (this.updateCardImageBase64 == null) {
            data = {
                id: this.updateProductId,
                code: this.updateProductCode,
                name: this.updateProductName,
                thumbnail: null,
                price: this.updateProductPrice,
                totalQty: this.updateTotalQty,
                currentQty: this.updateCurrentQty,
                categories: categoryId,
                status: this.updateProductStatus
            };
        } else {
            data = {
                id: this.updateProductId,
                code: this.updateProductCode,
                name: this.updateProductName,
                thumbnail: this.updateCardImageBase64.split(',')[1],
                price: this.updateProductPrice,
                totalQty: this.updateTotalQty,
                currentQty: this.updateCurrentQty,
                categories: categoryId,
                status: this.updateProductStatus
            };
        }


        this.productService.updateProduct(data).subscribe((data) => {
            if (data['success']) {
                this.notifierService.notify('success', 'Product update success');

                this._clearText();
                this._getAllProducts(0);
                this.removebackdrop();
            } else {
                // this.removebackdrop();

                this.notifierService.notify('error', 'Product update failed');
            }
        }, error => {
            // this.removebackdrop();

            this.notifierService.notify('error', 'Product update failed');
        });

    }

    checkUpdateValidation() {
        if (this.updateProductName !== undefined) {
            if (this.updateProductCode !== undefined) {
                if (this.updateProductPrice !== undefined) {
                    if (this.updateTotalQty !== undefined) {
                        if (this.updateCurrentQty !== undefined) {
                            if (this.updateCategoryList.length > 0) {
                                if (this.updateCardImageBase64 !== undefined) {
                                    this._updateProduct();
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


    removebackdrop() {
        this.closebutton.nativeElement.click();
    }

    hide() {
        this.visibleAnimate = false;
        setTimeout(() => (this.visible = false), 300);
    }

    hideAddProduct() {
        this.visibleAnimate = false;
        setTimeout(() => (this.visible = false), 300);
    }

    private removebackdropAddProduct() {
        this.closeAddProductbutton.nativeElement.click();
    }

    ngAfterViewInit(): void {

        fromEvent(this.searchElement.nativeElement, 'keyup').pipe(
            // get value
            map((event: any) => {

                if (event.target.value.length == 0) {
                    this.productCustomSearch();
                }
                return event.target.value;
            })

            , filter(res => res.length > 1)

            , debounceTime(1000)

            , distinctUntilChanged()
        ).subscribe((text: string) => {
            this.productCustomSearch();
        });

    }

}
