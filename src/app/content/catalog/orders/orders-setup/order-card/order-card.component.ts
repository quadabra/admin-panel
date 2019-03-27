import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order;

  constructor() { }

  ngOnInit() {
  }

}
