import {Component, OnInit, VERSION} from '@angular/core';
// import {Category} from '../model/category';
import {CategoryService} from '../service/admin-web-services/category.service';
import {Category} from '../model/category';

@Component({
    selector: 'app-manage-categories',
    templateUrl: './manage-categories.component.html',
    styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
    categoryName = 'Angular ' + VERSION.major;
    private categoryList: Category[];
    // private categoryList: Category[];

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

    addCategoryName : string;

    constructor(
        private categoryService: CategoryService
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

    ngOnInit(): void
     {
        this.getAllCategoryList(0);
    }

    private getAllCategoryList(pageno) {
        this.categoryService.getAllCategory(pageno).subscribe(
            (data: Object[]) => {
                this.categoryList = data['body'].content;
                // console.log(this.categoryList);
                this.config.itemsPerPage = data['body'].size;
                this.config.totalItems = data['body'].totalElements;
            },
            error => {
            });
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

    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }

    _createCategory(){

        let category = {
            name : this.addCategoryName,
            thumbnail : this.cardImageBase64
        }

        this.categoryService.createCategory(category).subscribe((data)=>{
            if (data['success']){
                // success alert
            }else{
                // alert(data['message']); error message
            }
        },error => {
            // error message
        })
    }

}
