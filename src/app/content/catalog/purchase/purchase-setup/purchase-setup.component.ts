import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-setup',
  templateUrl: './purchase-setup.component.html',
  styleUrls: ['./purchase-setup.component.css']
})
export class PurchaseSetupComponent implements OnInit {
  tabs: string[] = ['purchase', 'auto', 'files'];

  dataSource = [
    {
      brand: 'sso',
      name: 'suit azaza',
      type: 'suit',
      options: [
        {
          optionName: 'size',
          optionValue: '44-46'
        },
        {
          optionName: 'color',
          optionValue: 'green'
        }
      ],
      details: 'hlam',
      quantity: 44,
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
