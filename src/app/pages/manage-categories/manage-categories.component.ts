import {Component, ElementRef, OnInit, VERSION, ViewChild} from '@angular/core';
import {AfterViewInit, Component, ElementRef, OnInit, VERSION, ViewChild} from '@angular/core';
// import {Category} from '../model/category';
import {CategoryService} from '../service/admin-web-services/category.service';
import {Category} from '../model/category';
import {AlertService} from '../_alert';
import {NotifierService} from 'angular-notifier';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";

@Component({
    selector: 'app-manage-categories',
    templateUrl: './manage-categories.component.html',
    styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit,AfterViewInit {
    @ViewChild('closebutton') closebutton;
    @ViewChild('closebutton1') closebutton1;
    categoryName = 'Angular ' + VERSION.major;
    private categoryList: Category[];
    @ViewChild('searchElement', {static: true}) searchElement: ElementRef;
    // private categoryList: Category[];

    @ViewChild('myInput')
    myInputVariable: ElementRef;
    @ViewChild('myInput2')
    myInputVariable2: ElementRef;

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string = '';

    updateImageError: string;
    updateIsImageSaved: boolean;
    updateCardImageBase64: string = '';

    addCategoryName: string;
    updateCategoryName: string;
    updateCategoryStatus: string;
    updateCategoryId: string;

    customSearchText: string = '';
    private options = {
        autoClose: false,
        keepAfterRouteChange: false
    };

    constructor(
        private categoryService: CategoryService,
        protected alertService: AlertService,
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
        this.getAllCategoryList(pagno);
    }

    ngOnInit(): void {
        this.getAllCategoryList(0);
    }

    private getAllCategoryList(pageno) {
        this.categoryService.getAllCategory('', pageno).subscribe(
            (data: Object[]) => {
                this.categoryList = data['body'].content;
                // console.log(this.categoryList);
                this.config.itemsPerPage = data['body'].size;
                this.config.totalItems = data['body'].totalElements;
            },
            error => {
                this.alertService.warn('Something went wrong', this.options)
            });
    }

    categoryCustomSearch() {
        if (this.customSearchText !== '') {
            this.categoryService.getAllCategory(this.customSearchText, 0).subscribe(
                (data: Object[]) => {
                    this.categoryList = data['body'].content;
                    // console.log(this.categoryList);
                    this.config.itemsPerPage = data['body'].size;
                    this.config.totalItems = data['body'].totalElements;
                },
                error => {
                    this.alertService.warn('Something went wrong', this.options)
                });
        } else {
            this.getAllCategoryList(0);
        }
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

    _createCategory() {
        if (this.addCategoryName !== '') {
            if (this.cardImageBase64 !== '') {
                let category = {
                    name : this.addCategoryName,
                    thumbnail : this.cardImageBase64.split(',')[1]
                }

                this.categoryService.createCategory(category).subscribe((data) => {
                    if (data['success']) {
                        // success alert
                        this.removebackdrop();
                        this.getAllCategoryList(0);
                        this.cardImageBase64 = null;
                        this.isImageSaved = false;
                        this.addCategoryName = '';
                        this.myInputVariable.nativeElement.value = "";
                        this.alertService.success('Category added successfully', this.options);
                    } else {
                        // alert(data['message']); error message
                        // this.removebackdrop();
                        this.alertService.warn(data['message'], this.options)

                    }
                }, error => {
                    // error message
                    // this.removebackdrop();
                    this.alertService.warn('Something went wrong', this.options)

                })
            } else {
                // this.removebackdrop();
                this.notifierService.notify('error', 'Please select the image');

            }
        } else {
            // this.removebackdrop();
            this.notifierService.notify('error', 'Please enter category name');

        }
        // this.removebackdrop();

    }

    _updateCategory() {
        if (this.updateCategoryName !== '') {
            if (this.updateCardImageBase64 !== '') {

                let a = null;
                if (this.updateCardImageBase64 !== null){
                    a = this.updateCardImageBase64.split(',')[1];
                }
                let category = {
                    id : this.updateCategoryId,
                    name : this.updateCategoryName,
                    thumbnail : a,
                    categoryStatus : this.updateCategoryStatus
                }

                this.categoryService.updateCategory(category).subscribe((data) => {
                    if (data['success']) {
                        // success alert
                        // this.removebackdrop();
                        this.closebutton1.nativeElement.click();
                        this.getAllCategoryList(0);
                        this.alertService.success('Category Update successfully', this.options);
                        this.updateCardImageBase64 = null;
                        this.updateIsImageSaved = false;
                        this.myInputVariable2.nativeElement.value = "";
                    } else {
                        // alert(data['message']); error message
                        // this.removebackdrop();
                        this.alertService.warn(data['message'], this.options)

                    }
                }, error => {
                    // error message
                    // this.removebackdrop();
                    this.alertService.warn('Something went wrong', this.options)

                });
            } else {
                // this.removebackdrop();
                this.notifierService.notify('error', 'Please select the image');

            }
        } else {
            // this.removebackdrop();
            this.notifierService.notify('error', 'Please enter category name');
        }

    }

    removebackdrop() {
        this.closebutton.nativeElement.click();
    }

    loadUpdateDetails(id, name, image, status) {
        this.updateCategoryId = id;
        this.updateCategoryName = name;
        this.updateCardImageBase64 = null;
        this.updateCategoryStatus = status;
    }
    ngAfterViewInit(): void {

        fromEvent(this.searchElement.nativeElement, 'keyup').pipe(
            // get value
            map((event: any) => {

                if (event.target.value.length == 0) {
                    this.categoryCustomSearch();
                }
                return event.target.value;
            })

            , filter(res => res.length > 1)

            , debounceTime(1000)

            , distinctUntilChanged()

        ).subscribe((text: string) => {
            this.categoryCustomSearch();
        });

    }

}
