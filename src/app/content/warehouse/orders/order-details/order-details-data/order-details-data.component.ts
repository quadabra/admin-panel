import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-order-details-data',
  templateUrl: './order-details-data.component.html',
  styleUrls: ['./order-details-data.component.css']
})
export class OrderDetailsDataComponent implements OnInit {
  @Input() dataSource;
  displayedColumns = ['id', 'name', 'options', 'status', 'price'];
  deliveryTypes = ['DHL', 'EMS', 'POST'];
  constructor() { }

  ngOnInit() {
  }

  getTotalCost() {
    return this.dataSource.cartData.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
