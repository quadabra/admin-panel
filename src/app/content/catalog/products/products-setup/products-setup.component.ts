import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {IProduct} from '../../../../_model/interface/product';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './products-setup.component.html',
  styleUrls: ['./products-setup.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductsSetupComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'brand', 'buy', 'sell', 'status', 'edit'];
  expandedElement: any;
  dataSource: MatTableDataSource<IProduct[]>;
  selected = this.displayedColumns[2];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => this.dataSource = new MatTableDataSource(data['productList']));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

