import {Component, OnInit, VERSION} from '@angular/core';
import {Category} from "../model/category";
import {CategoryService} from "../service/admin-web-services/category.service";
import {TestimonialService} from '../service/admin-web-services/testimonial.service';
import {Testimonial} from '../model/testimonial';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
    // categoryName = 'Angular ' + VERSION.major;
    // private categoryList: Category[];
    // private categoryList: Category[];

    testimonialList : Testimonial[];

    testimonials = [
        {
            id: 1,
            image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
            youtubeUrl: "https://www.youtube.com/watch?v=_0N8H8FiuP8&t=1498s&ab_channel=HiruNews",
            customerName: "Aravinda Perera",
            country: "Australia",
            comment: "Hi it's a really good product"
        },
        {
            id: 2,
            image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
            youtubeUrl: "https://www.youtube.com/watch?v=_0N8H8FiuP8&t=1498s&ab_channel=HiruNews",
            customerName: "kavinda gihan",
            country: "netherland",
            comment: "hbsdvna dvahbsvdja vasvhba vvava svahv ajvahv avja"
        },
        {
            id: 3,
            image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
            youtubeUrl: "https://www.youtube.com/watch?v=_0N8H8FiuP8&t=1498s&ab_channel=HiruNews",
            customerName: "kavinda gihan",
            country: "netherland",
            comment: "sdgsg sgs dgfsfs dfgsfd gsg"
        },
        {
            id: 4,
            image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
            youtubeUrl: "https://www.youtube.com/watch?v=_0N8H8FiuP8&t=1498s&ab_channel=HiruNews",
            customerName: "kavinda gihan",
            country: "netherland",
            comment: "jnsv sjdnfd sdfs gkdsdfg sfdsgs"
        },
        {
            id: 5,
            image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
            youtubeUrl: "https://www.youtube.com/watch?v=_0N8H8FiuP8&t=1498s&ab_channel=HiruNews",
            customerName: "kavinda gihan",
            country: "netherland",
            comment: "iopurgslm msgkkmsrgslm mbslfdsfd m,,"
        },
    ]

    constructor(
        // private categoryService: CategoryService
        private testimonialService : TestimonialService
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
        this.testimonialService.getAllTestimonials().subscribe((data)=>{
            if (data['success']){
                this.testimonialList = data['body'];
                console.log(this.testimonialList);
            }else {
                alert(data['message'])
            }
        },error => {

        })
    }
}
