import {Component, OnInit, VERSION} from '@angular/core';
import {OperatorService} from '../service/admin-web-services/operator.service';
import {Category} from "../model/category";
// import {CategoryService} from "../service/admin-web-services/category.service";
import {AlertService} from "../_alert";
import {Deo} from "../model/deo";

@Component({
    selector: 'app-registration-deo',
    templateUrl: './registration-deo.component.html',
    styleUrls: ['./registration-deo.component.css']
})
export class RegistrationDEOComponent implements OnInit {

    categoryName = 'Angular ' + VERSION.major;
    private categoryList: Deo[];
    // private categoryList: Category[];

    // imageError: string;
    // isImageSaved: boolean;
    // cardImageBase64: string;
    //
    // addCategoryName: string;
    private options = {
        autoClose: false,
        keepAfterRouteChange: false
    };


    config: any;
    items = [];


    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    updateid: number;
    updatefirstName: string;
    updatelastName: string;
    updateemail: string;
    updatepassword: string;

    constructor(
        protected alertService: AlertService,
        private operatorService: OperatorService
    ) {
        this.config = {
            itemsPerPage: 1,
            currentPage: 1,
            totalItems: 0
        };
    }

    pageChanged(event) {
        this.config.currentPage = event;
        const pagno = this.config.currentPage - 1;
        this.getAllCategoryList(pagno);
    }

    ngOnInit(): void {
        console.log('wwwwwwwwwwwwwww')
        this.getAllCategoryList(0);

    }

    // private _updatePromotion(email) {
    //     console.log(email)
    // }

    private deleteDeo(id) {
        this.operatorService.deleteteDeo(id).subscribe((data) => {
        })
    }

    private _updateDeo() {

        let deoo = {
            id: this.updateid,
            email: this.updateemail,
            firstName: this.updatefirstName,
            lastName: this.updatelastName,
            role: "OPERATOR",
            password: this.updatepassword
        }
        console.log(deoo)
        this.operatorService.updateDeo(deoo).subscribe((data) => {
                if (data['success']) {
                    // success msg
                    console.log('aaaaa')
                    // console.log(data)
                    this.alertService.success('promotion updated', this.options);

                } else {
                    // error msg
                    console.log('bbbbbbbbbbbbbbb')
                    // console.log(data)

                    this.alertService.warn('Something went wrong', this.options)

                }
            }
            ,error => {
                console.log('ccccccccccccccccc')

                this.alertService.warn('Something went wrong', this.options)

                // error msg
            }
        )
    }

    private _getDeoDetailsToUpdate(id, firstname, lastName, email, password) {
        console.log(id + ' ' + firstname + ' ' + lastName + ' ' + email + ' ' + password)
        this.updateid = id;
        this.updatefirstName = firstname;
        this.updatelastName = lastName;
        this.updateemail = email;
        this.updatepassword = password;
        console.log(this.updateid + ' ' + this.updatefirstName + ' ' + this.updatelastName + ' ' + this.updateemail + ' ' + this.updatepassword)
    }

    private getAllCategoryList(pageno) {
        this.operatorService.getAllOparator(pageno).subscribe(
            (data: Object[]) => {
                console.log('data')
                console.log(data)
                console.log('data')
                this.categoryList = data['body'];
                // this.categoryList = data['body'].content;
                // console.log(this.categoryList);
                this.config.itemsPerPage = data['body'].size;
                this.config.totalItems = data['body'].totalElements;
            },
            error => {
                this.alertService.warn('Something went wrong', this.options)
            });
    }

    _createOperator() {
        let operator = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            role: "ROLE_OPERATOR"
        }

        this.operatorService.createOperator(operator).subscribe((data) => {
            if (data['success']) {
                // success msg
                this._clearText();
            } else {
                // error msg
                alert(data['message'])
            }
        }, error => {
            // error msg
        })
    }

    _clearText() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
    }

}
