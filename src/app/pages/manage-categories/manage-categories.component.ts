import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {

  constructor() { }

  category =[
    {categoryId:'123654',categoryName:'Herbs1',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Activate'},
    {categoryId:'2123654',categoryName:'Herbs2',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Inactivate'},
    {categoryId:'3123654',categoryName:'Herbs3',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Activate'},
    {categoryId:'4123654',categoryName:'Herbs4',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Activate'},
    {categoryId:'5123654',categoryName:'Herbs5',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Activate'},
    {categoryId:'6123654',categoryName:'Herbs6',categoryThumbnail:'https://thumbs.nosto.com/quick/magento-f5b2bba1/8/1323/bb84496c92fd35ece3cefd6bb79bd94cac0b5d4c99eb7e172678efa41165c73ba/A',categotyStatus:'Activate'},
  ]

  ngOnInit(): void {
  }

}
