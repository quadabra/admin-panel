import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-order-details-data',
  templateUrl: './wh-order-details-data.component.html',
  styleUrls: ['./wh-order-details-data.component.css']
})
export class WhOrderDetailsDataComponent implements OnInit {
  @Input() dataSource;
  constructor() { }

  ngOnInit() {
  }

}
