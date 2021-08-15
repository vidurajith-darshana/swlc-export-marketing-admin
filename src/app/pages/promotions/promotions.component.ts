import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
