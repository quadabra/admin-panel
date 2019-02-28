import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-wh-orders',
  templateUrl: './orders-setup.component.html',
  styleUrls: ['./orders-setup.component.css']
})
export class OrdersSetupComponent implements OnInit {
  tabs = ['In progress', 'Waiting', 'Special', 'Completed'];
  orders = [
    {
      id: '010189',
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
  checkTypes: string[] = ['payment', 'comment', 'waiting', 'assembly', 'depart'];
  constructor() {
  }

  ngOnInit() {
  }

  setDeliveryColor(delivery: string): string {
    let style = '';
    switch (delivery) {
      case 'dhl':
        style = '3px 3px 5px 0 rgba(255, 165, 0, 0.8)';
        break;
      case 'ups':
        style = '3px 3px 5px 0 rgba(255, 110, 64, 0.8)';
        break;
      case 'ems':
        style = '3px 3px 5px 0 rgba(68, 138, 255, 0.8)';
        break;
      default:
        style = null;
    }
    return style;
  }
}
