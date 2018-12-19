import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CatalogProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'brand'];
  expandedElement: any;
  dataSource = new ExampleDataSource();

  constructor() {
  }

  ngOnInit() {
  }

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

}

const data = [
  {
    id: 101,
    name: 'partizan',
    brand: 'sso',
    status: 'enabled',
    category: 'suits',
    image: 'none',
    position: '0'
  },
  {
    id: 102,
    name: 'partizan',
    brand: 'sso',
    status: 'disabled',
    category: 'suits',
    image: 'none',
    position: '1'
  },
  {
    id: 103,
    name: 'partizan',
    brand: 'sso',
    status: 'enabled',
    category: 'suits',
    image: 'none',
    position: '2'
  },
  {
    id: 104,
    name: 'partizan',
    brand: 'sso',
    status: 'enabled',
    category: 'suits',
    image: 'none',
    position: '3'
  }
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    data.forEach(element => rows.push(element, {detailRow: true, element}));
    console.log(rows);
    return of(rows);
  }

  disconnect() {
  }
}
