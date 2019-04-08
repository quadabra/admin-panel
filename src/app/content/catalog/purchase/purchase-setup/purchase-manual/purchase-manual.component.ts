import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-purchase-manual',
  templateUrl: './purchase-manual.component.html',
  styleUrls: ['./purchase-manual.component.css']
})
export class PurchaseManualComponent implements OnInit {
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
    },
    {
      brand: 'ana',
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
  displayedColumns = ['status', 'manufacturer', 'name', 'article', 'color'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
