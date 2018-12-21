import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {IProduct} from '../../../_model/interface/product';

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
  displayedColumns = ['id', 'image', 'name', 'brand', 'buy', 'sell', 'status', 'edit'];
  expandedElement: any;
  dataSource: IProduct[];
  selected = this.displayedColumns[2];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        const rows = [];
        const rawData = data['productList'];
        rawData.forEach(item => rows.push(item, { storeInfo: true, item }));
        this.dataSource = rows;
        console.log(rows);
      }
    );
  }

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('storeInfo');
}

