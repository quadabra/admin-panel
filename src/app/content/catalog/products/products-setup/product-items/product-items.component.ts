import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductItemsComponent implements OnInit {
  @Input() id;
  columnsToDisplay = ['options', 'stock', 'need', 'acquiring'];
  expandedElement: any;
  dataSource = [
    {
      options: {
        color: 'atags',
        size: '55',
        height: '8'
      },
      wh: {
        stock: 1,
        need: 0,
        ordered: 75
      }
    },
    {
      options: {
        color: 'atags',
        size: '44',
        height: '7'
      },
      wh: {
        stock: 1,
        need: 0,
        ordered: 75
      }
    },
    {
      options: {
        color: 'atags',
        size: '34',
        height: '3'
      },
      wh: {
        stock: 1,
        need: 0,
        ordered: 75
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  concatOptions(options): string {
    return 'Color: ' + options.color + '; ' + 'Size: ' + options.size + '; ' + 'Height: ' + options.height;
  }
}
