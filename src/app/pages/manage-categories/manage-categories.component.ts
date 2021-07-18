import {Component, OnInit, VERSION} from '@angular/core';
// import {Category} from '../model/category';
import {CategoryService} from '../service/admin-web-services/category.service';

@Component({
    selector: 'app-manage-categories',
    templateUrl: './manage-categories.component.html',
    styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
    categoryName = 'Angular ' + VERSION.major;
    // private categoryList: Category[];
    private categoryList: any

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

}
