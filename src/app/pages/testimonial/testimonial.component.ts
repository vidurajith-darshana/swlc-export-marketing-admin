import {Component, OnInit, VERSION, ViewChild} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../service/admin-web-services/category.service";
import {TestimonialService} from '../service/admin-web-services/testimonial.service';
import {Testimonial} from '../model/testimonial';
import {AlertService} from '../_alert';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
    @ViewChild('closebutton') closebutton;
    // categoryName = 'Angular ' + VERSION.major;
    // private categoryList: Category[];
    // private categoryList: Category[];

    testimonialList : Testimonial[];

    addYoutubeUrl : string;
    addCustomerName : string;
    addCountry : string;
    addComment : string;

    updateYoutubeUrl : string;
    updateCustomerName : string;
    updateCountry : string;
    updateComment : string;
    updateTestimonialId : number;

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string = '';

    updateImageError: string;
    updateIsImageSaved: boolean;
    updateCardImageBase64: string = '';

    customSearchText : string = '';

    private options = {
        autoClose: false,
        keepAfterRouteChange: false
    };
    constructor(
        // private categoryService: CategoryService
        private testimonialService : TestimonialService,
    protected alertService: AlertService,
        private notifierService: NotifierService,
    ) {
        // this.config = {
        //   itemsPerPage: 1,
        //   currentPage: 1,
        //   totalItems: 0
        // };
    }

    // config: any;
    // items = [];

    // pageChanged(event) {
    //   this.config.currentPage = event;
    //   const pagno = this.config.currentPage - 1;
    //   this.getAllCategoryList(pagno);
    // }

    ngOnInit(): void {
        this._getAllTestimonials();
    }

    // private getAllCategoryList(pageno) {
    //   this.categoryService.getAllCategory(pageno).subscribe(
    //       (data: Object[]) => {
    //         this.categoryList = data['body'].content;
    //         // console.log(this.categoryList);
    //         this.config.itemsPerPage = data['body'].size;
    //         this.config.totalItems = data['body'].totalElements;
    //       },
    //       error => {
    //       });
    // }

    _getAllTestimonials(){
        this.testimonialService.getAllTestimonials('').subscribe((data)=>{
            if (data['success']){
                this.testimonialList = data['body'];
            }else {
                alert(data['message'])
            }
        },error => {
            this.alertService.warn('Something went wrong', this.options)
        })
    }

    testimonialsSearch(){
        if (this.customSearchText !== ''){
            this.testimonialService.getAllTestimonials(this.customSearchText).subscribe((data)=>{
                if (data['success']){
                    this.testimonialList = data['body'];
                }else {
                    alert(data['message'])
                }
            },error => {
                this.alertService.warn('Something went wrong', this.options)
            })
        }else {
            this._getAllTestimonials();
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

    checkTextFieldEmpty(){
        if (this.addCustomerName !== undefined){
            if (this.addYoutubeUrl !== undefined){
                if (this.addCountry !== undefined){
                    if (this.addComment !== undefined){
                        if (this.cardImageBase64 !== ''){
                            this._createTestimonials();
                        }else{
                            this.notifierService.notify('error', 'Please select the image');
                        }
                    }else{
                        this.notifierService.notify('error', 'Please enter comment');
                    }
                }else {
                    this.notifierService.notify('error', 'Please enter country');
                }
            }else {
                this.notifierService.notify('error', 'Please enter youtube url');
            }
        }else{
            this.notifierService.notify('error', 'Please enter customer name');
        }
    }

    _createTestimonials(){
        let testimonials = {
            image : this.cardImageBase64,
            youtubeUrl : this.addYoutubeUrl,
            customerName : this.addCustomerName,
            country : this.addCountry,
            comment : this.addComment,
        }

        this.testimonialService.createTestimonials(testimonials).subscribe((data)=>{
            if (data['success']){
                // success msg
                this.alertService.success('testimonials added', this.options);

                this._clearText();
                this._getAllTestimonials();
            }else {
                this.alertService.warn('Something went wrong', this.options)
                // error msg
            }
        },error => {
            this.alertService.warn('Something went wrong', this.options)
            // error msg handle
        })
    }

    _deleteTestimonials(testimonialId){
        this.testimonialService.deleteTestimonials(testimonialId).subscribe((data)=>{
            if (data['success']){
                //success message
                this.removebackdrop();

                this.alertService.success('testimonials deleted', this.options);
                this._getAllTestimonials();
            }else {
                // error message
                this.alertService.warn('Something went wrong', this.options)
            }
        },error => {
            this.alertService.warn('Something went wrong', this.options)
            // error msg
        })
    }

    updateTextFields(){
        if (this.updateCustomerName !== ''){
            if (this.updateComment !== ''){
                if (this.updateYoutubeUrl !== ''){
                    if (this.updateCountry !== ''){
                        this._updateTestimonials();
                    }else {
                        this.alertService.warn('Country is required!', this.options);
                    }
                }else {
                    this.alertService.warn('Youtube url is required!', this.options);
                }
            }else {
                this.alertService.warn('Comment is required!', this.options);
            }
        }else {
            this.alertService.warn('Customer name is required!', this.options);
        }
    }

    _clearText(){
        this.cardImageBase64 = '';
        this.addYoutubeUrl= '';
        this.addCustomerName = '';
        this.addCountry = '';
        this.addComment = '';
    }

    _updateTestimonials(){
        let testimonials = {
            id : this.updateTestimonialId,
            image : this.updateCardImageBase64,
            youtubeUrl : this.updateYoutubeUrl,
            customerName : this.updateCustomerName,
            country : this.updateCountry,
            comment : this.updateComment,
        }

        this.testimonialService.createTestimonials(testimonials).subscribe((data)=>{
            if (data['success']){
                // success msg
                this.alertService.success('testimonials added', this.options);

                this._clearText();
                this._getAllTestimonials();
                this.removebackdrop();
            }else {
                this.alertService.warn('Something went wrong', this.options)
                // error msg
            }
        },error => {
            this.alertService.warn('Something went wrong', this.options)
            // error msg handle
        })
    }

    loadUpdateDetails(id,name,image,url,country,comment){
        this.updateTestimonialId = id;
        this.updateCustomerName = name;
        this.updateCardImageBase64 = image;
        this.updateYoutubeUrl = url;
        this.updateCountry = country;
        this.updateComment = comment;
    }
    removebackdrop() {
        this.closebutton.nativeElement.click();
    }
}
