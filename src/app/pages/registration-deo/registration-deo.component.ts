import {Component, OnInit, VERSION, ViewChild} from '@angular/core';
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
    @ViewChild('closebutton') closebutton;

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

    clicked: any
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
            if (data['success']) {
                this.removebackdrop();

                this.alertService.success('DEO deleted', this.options);
                this.getAllCategoryList(0);

            } else {
                this.alertService.warn('Something went wrong', this.options)
            }
        },error => {
            this.alertService.warn('Something went wrong', this.options)
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
                    this.removebackdrop();

                    // console.log(data)
                    this.alertService.success('DEO updated', this.options);
                    this.getAllCategoryList(0);

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
    // validateEmail(email) {
    //     const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return regularExpression.test(String(email).toLowerCase());
    // }
    validateEmail(email) {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    _createOperator() {
        let validate = this.validateEmail(this.email);
        if (validate) {
            let operator = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                role: "ROLE_OPERATOR"
            }
            // if (this.validateEmail(this.email)) {
            this.operatorService.createOperator(operator).subscribe((data) => {
                if (data['success']) {
                    // success msg
                    this.removebackdrop();
                    this.alertService.success('DEO Added', this.options);

                    this._clearText();
                    this.getAllCategoryList(0);

                } else {
                    // error msg
                    this.alertService.warn('Something went wrong', this.options)

                    alert(data['message'])
                }
            }, error => {
                this.alertService.warn('Something went wrong', this.options)

                // error msg
            })
        } else {
            this.alertService.warn('your email address is wrong please check again', this.options)

        }

        // }
    }

    _clearText() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
    }
    removebackdrop() {
        this.closebutton.nativeElement.click();
    }
}
