import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-auto',
  templateUrl: './purchase-auto.component.html',
  styleUrls: ['./purchase-auto.component.css']
})
export class PurchaseAutoComponent implements OnInit {
  @Input() dataSource;

  constructor() {
  }

  ngOnInit() {
  }

}
