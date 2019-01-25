import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-orders',
  templateUrl: './wh-orders.component.html',
  styleUrls: ['./wh-orders.component.css']
})
export class WhOrdersComponent implements OnInit {
  tabs = ['In progress', 'Waiting', 'Special', 'Completed'];
  orders = [
    {
      id: '0101',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop'
    },
    {
      id: '0102',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop'
    },
    {
      id: '0103',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop'
    },
    {
      id: '0104',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
