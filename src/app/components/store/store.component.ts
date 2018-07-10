import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  cardData = [
    {
      img: '../../../assets/backpack.png',
      description: 'NLM Backpack',
      price: '$49.95'
    },
    {
      img: '../../../assets/beanie.png',
      description: 'NLM Wool Beanie',
      price: '$19.95'
    },
    {
      img: '../../../assets/hoodie.png',
      description: 'NLM Pullover Hoodie',
      price: '$39.95'
    },
    {
      img: '../../../assets/sock.png',
      description: 'NLM Wool Socks',
      price: '$9.95'
    },
    {
      img: '../../../assets/waterbottle.png',
      description: 'NLM 36oz Watter Bottle',
      price: '$9.95'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
