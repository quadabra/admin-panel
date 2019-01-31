import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

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
      shop: 'grey-shop',
      items: 5,
      delivery: 'dhl',
    },
    {
      id: '0102',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'dhl',
    },
    {
      id: '0103',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'dhl',
    },
    {
      id: '0104',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'dhl',
    },
    {
      id: '0101',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'ems',
    },
    {
      id: '0102',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'ems',
    },
    {
      id: '0103',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'dhl',
    },
    {
      id: '0104',
      country: 'japan',
      user_name: 'Andrew Vodkins',
      date: '01.01.01',
      price: '150',
      shop: 'grey-shop',
      items: 5,
      delivery: 'ups',
    },
  ];
  delivers = new FormControl();

  deliveryList: string[] = ['DHL', 'EMS', 'Post', 'Air', 'UPS', 'RS-28'];
  constructor() {
  }

  ngOnInit() {
  }

  setDeliveryColor(delivery: string): string {
    let style = '';
    switch (delivery) {
      case 'dhl':
        style = 'rgba(255, 255, 0, 0.5)';
        break;
      case 'ups':
        style = 'rgba(255, 110, 64, 0.5)';
        break;
      case 'ems':
        style = 'rgba(68, 138, 255, 0.5)';
        break;
      default:
        style = null;
    }
    return style;
  }
}
