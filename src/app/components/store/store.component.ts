import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  cardData = [
    {
      img: '../../../assets/shirt-1.jpg',
      description: 'Rico Abreu Satalite 98 Mens Jersey',
      price: '$48.50'
    },
    {
      img: '../../../assets/shirt-2.jpg',
      description: 'Rico Abreu Satalite 98 Womans Jersey',
      price: '$48.50'
    },
    {
      img: '../../../assets/shirt-3.jpg',
      description: 'Rico Abreu Satalite 98 Youth Jersey',
      price: '$38.50'
    },
    {
      img: '../../../assets/shirt-4.jpg',
      description: 'Shirt with a a super long title to see how things break',
      price: '$1337.50'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
