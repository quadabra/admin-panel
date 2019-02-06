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
    userData: [
      {fieldName: 'First Name', fieldValue: 'User'},
      {fieldName: 'Last Name', fieldValue: 'Name'},
      {fieldName: 'Address1', fieldValue: 'Street1488'},
      {fieldName: 'City', fieldValue: 'CityAzaza'},
      {fieldName: 'Postcode', fieldValue: '432633'},
      {fieldName: 'Phone', fieldValue: '666 77 88'},
      {fieldName: 'Region/State', fieldValue: 'Kukuevo'},
      {fieldName: 'Country', fieldValue: 'Фино-монгольская граница'},
      {fieldName: 'Email', fieldValue: 'email@email.com'},
    ],
  };

  constructor() {
  }

  ngOnInit() {
  }

}
