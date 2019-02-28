import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wh-incoming-expand',
  templateUrl: './incoming-expand.component.html',
  styleUrls: ['./incoming-expand.component.css']
})
export class IncomingExpandComponent implements OnInit {
  @Input() dataDetails;
  displayedColumns = ['item', 'color', 'amount', 'brand']
  constructor() { }

  ngOnInit() {
  }

}
