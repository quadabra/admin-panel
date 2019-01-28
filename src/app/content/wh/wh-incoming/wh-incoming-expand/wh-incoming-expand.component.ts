import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-incoming-expand',
  templateUrl: './wh-incoming-expand.component.html',
  styleUrls: ['./wh-incoming-expand.component.css']
})
export class WhIncomingExpandComponent implements OnInit {
  @Input() dataDetails;
  displayedColumns = ['item', 'color', 'amount', 'brand']
  constructor() { }

  ngOnInit() {
  }

}
