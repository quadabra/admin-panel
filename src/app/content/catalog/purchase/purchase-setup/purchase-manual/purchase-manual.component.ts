import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-purchase-manual',
  templateUrl: './purchase-manual.component.html',
  styleUrls: ['./purchase-manual.component.css']
})
export class PurchaseManualComponent implements OnInit {
  @Input() dataSource;

  constructor() {
  }

  ngOnInit() {
  }

}
