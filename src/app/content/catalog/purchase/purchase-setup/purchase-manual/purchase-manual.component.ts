import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-manual',
  templateUrl: './purchase-manual.component.html',
  styleUrls: ['./purchase-manual.component.css']
})
export class PurchaseManualComponent implements OnInit {
  data = [
    {
      brand: 'sso',
      name: 'suit azaza',
      type: 'suit',
      ordered: true,
      options: [
        {
          name: 'size',
          value: '44-46'
        },
        {
          name: 'color',
          value: 'green'
        }
      ],
      details: 'hlam',
      quantity: 44,
    },
    {
      brand: 'ana',
      name: 'suit azaza',
      type: 'suit',
      ordered: false,
      options: [
        {
          name: 'size',
          value: '44-46'
        },
        {
          name: 'color',
          value: 'green'
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

  drawoptions(options): void {
    console.log(options);
  }

  applyFilter(filterValue: string) {
  }
}
