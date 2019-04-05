import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-purchase-setup',
  templateUrl: './purchase-setup.component.html',
  styleUrls: ['./purchase-setup.component.css']
})
export class PurchaseSetupComponent implements OnInit {
  tabs: string[] = ['purchase', 'auto', 'files'];
  displayedColumns = ['status', 'manufacturer', 'name', 'article', 'color', ''];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data = [
    {
      brand: 'sso',
      name: 'suit azaza',
      type: 'suit',
      options: [
        {
          optionName: 'size',
          optionValue: '44-46'
        },
        {
          optionName: 'color',
          optionValue: 'green'
        }
      ],
      details: 'hlam',
      quantity: 44,
    }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit() {
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
