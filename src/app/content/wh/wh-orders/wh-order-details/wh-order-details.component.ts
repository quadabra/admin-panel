import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-order-details',
  templateUrl: './wh-order-details.component.html',
  styleUrls: ['./wh-order-details.component.css']
})
export class WhOrderDetailsComponent implements OnInit {
  orderDetails = {
    id: '132534',
    date: '01.05.2019',
    status: 'processing',
    user: {
      name: {first: 'User', last: 'Name'},
      address: {
        country: 'Germany',
        region: 'region666',
        city: 'city',
        addressLine: 'address1 5',
        postalCode: '324353',
        phone: '6667777'
      },
      email: 'email@email.com'
    },
  };

  constructor() {
  }

  ngOnInit() {
  }

}
