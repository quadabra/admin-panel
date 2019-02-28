import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-wh-incoming',
  templateUrl: './incoming-setup.component.html',
  styleUrls: ['./incoming-setup.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IncomingSetupComponent implements OnInit {
  manufacturers = new FormControl();
  items = new FormControl();
  manufacturerList = ['ANA', 'SSO', 'Techincome'];
  itemList = ['item1', 'item2', 'item3'];
  dataSource = [
    {
      number: 1,
      date: '01.01.2020',
      time: '14:88',
      manufacturers: ['ANA', 'SSO'],
      invoice : '8814',
      isAccepted: true,
      comment: 'zalupa',
      invoiceItems: [
        {
          item: 'army vatnik satana',
          color: 'govno',
          amount: '666',
          brand: 'ANAnism'
        }
      ]
    },
    {
      number: 1,
      date: '01.01.2020',
      time: '14:88',
      manufacturers: ['ANA', 'SSO'],
      invoice : '8814',
      isAccepted: true,
      comment: 'zalupa',
      invoiceItems: [
        {
          item: 'army vatnik satana',
          color: 'govno',
          amount: '666',
          brand: 'ANAnism'
        }
      ]
    },
    {
      number: 1,
      date: '01.01.2020',
      time: '14:88',
      manufacturers: ['ANA', 'SSO'],
      invoice : '8814',
      isAccepted: true,
      comment: 'zalupa',
      invoiceItems: [
        {
          item: 'army vatnik satana',
          color: 'govno',
          amount: '666',
          brand: 'ANAnism'
        }
      ]
    }
  ];
  columnsToDisplay = ['number', 'date', 'time', 'manufacturers', 'invoice', 'status', 'comment', 'action'];
  expandedElement: any;
  constructor() { }

  ngOnInit() {
  }
  filterReset(): void {
    this.items.setValue(null);
    this.manufacturers.setValue(null);
  }
}
