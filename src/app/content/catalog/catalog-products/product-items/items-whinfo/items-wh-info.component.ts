import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-wh-info',
  templateUrl: './items-wh-info.component.html',
  styleUrls: ['./items-wh-info.component.css']
})
export class ItemsWhInfoComponent implements OnInit {
  columnsToDisplay = ['id', 'status', 'order', 'comment'];
  dataSource = [
    {
      id: 432324,
      status: 'sent',
      order: '889900',
      comment: 'achtung!'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
