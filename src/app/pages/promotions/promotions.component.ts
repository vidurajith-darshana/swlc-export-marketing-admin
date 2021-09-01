import {Component, OnInit, ViewChild} from '@angular/core';
import {PromotionService} from '../service/admin-web-services/promotion.service';
import {Promotion} from '../model/promotion';
import {AlertService} from '../_alert';


@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  @ViewChild('closebutton') closebutton;

  promotionList : Promotion[];

  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  updateImageError: string;
  updateIsImageSaved: boolean;
  updateCardImageBase64: string;

  addPromotionDescription : string;
  addPromotionHeading : string;

  updatePromotionDescription : string;
  updatePromotionid : string;
  updatePromotioncdate : string;
  updatePromotionHeading: string;
  updatePromotionStatus : string;

  promotions = [
    {
      id: 1,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's not a really good product",
      heading: "Heading",
      created_date: '2021-07-26'
    },
    {
      id: 2,
      status: 'INACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-29'
    },
    {
      id: 3,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-20'
    },
    {
      id: 4,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 5,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 6,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 7,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 8,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 9,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 10,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
    {
      id: 11,
      status: 'ACTIVE',
      image: "https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1383/e7789469178cc18cf93ad058141fbce6adcdd7a6093ea9f12fda5c52c990b9b2a/A",
      description: "Hi it's a really good product",
      heading: "Heading",
      created_date: '2021-07-28'
    },
  ]
  private options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  constructor(
      private promotionService : PromotionService,
      protected alertService: AlertService
  ) { }

  ngOnInit(): void {
    this._getPromotionList(0);
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
            this.updateImageError =
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

  _createPromotion(){
    let promotion = {
      image : this.cardImageBase64.split(',')[1],
      description : this.addPromotionDescription,
      heading : this.addPromotionHeading
    }

    this.promotionService.createPromotion(promotion).subscribe((data)=>{
      if (data['success']){
        // success msg
        this.removebackdrop();
        this.alertService.success('Promotion added', this.options);
      }else {
        // error msg
        this.alertService.warn('Something went wrong', this.options)

      }
    },error => {
      this.alertService.warn('Something went wrong', this.options)

      // error msg
    })
  }

  _getPromotionList(pageNo){
    this.promotionService.getAllPromotions(pageNo).subscribe((data)=>{
      if (data['success']){
        this.promotionList = data['body'].content;
      }else{
        // error
        this.alertService.warn('Something went wrong', this.options)

      }
    },error => {
      this.alertService.warn('Something went wrong', this.options)

      // error msg
    })
  }

  _updatePromotion(promotionId){

    let promotion = {
      id : promotionId,
      image : this.updateCardImageBase64,
      description : this.updatePromotionDescription,
      heading : this.updatePromotionHeading,
      status : this.updatePromotionStatus
    }

    this.promotionService.updatePromotion(promotion).subscribe((data)=>{
      if (data['success']){
        // success msg
        this.removebackdrop();

        this._getPromotionList(0);
        this.alertService.success('promotion updated', this.options);

      }else {
        // error msg
        this.alertService.warn('Something went wrong', this.options)

      }
    },error => {
      this.alertService.warn('Something went wrong', this.options)

      // error msg
    })
  }

  _getPromotionDetailsToUpdate(description,heading,status,image,id,cdate){

    this.updatePromotionDescription = description;
    this.updatePromotionid = id;
    this.updatePromotioncdate = cdate;
    this.updatePromotionHeading = heading;
    this.updatePromotionStatus = status;
    this.updateCardImageBase64 = image;
  }

  _deletePromotion(id){
    console.log(id)
    this.promotionService.deletePromotions(id).subscribe((data)=>{
      if (data['success']){
        this.removebackdrop();

        this._getPromotionList(0);
        this.alertService.success('Promotion deleted Successfully', this.options);
      }else {
        this.alertService.warn('Promotion delete failed!', this.options);
      }
    },error => {
      this.alertService.warn('Promotion delete failed!', this.options);
    })
  }
  removebackdrop() {
    this.closebutton.nativeElement.click();
  }
}
