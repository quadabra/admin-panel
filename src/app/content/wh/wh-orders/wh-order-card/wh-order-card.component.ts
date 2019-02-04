import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-order-card',
  templateUrl: './wh-order-card.component.html',
  styleUrls: ['./wh-order-card.component.css']
})
export class WhOrderCardComponent implements OnInit {
  @Input() order;

  constructor() { }

  ngOnInit() {
  }

}
