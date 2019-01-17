import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-catalog-options',
  templateUrl: './catalog-options.component.html',
  styleUrls: ['./catalog-options.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CatalogOptionsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'priority', 'actions'];
  dataSource: Option[] = [
    { id: 1, name: 'color', priority: 1 },
    { id: 2, name: 'size', priority: 4 },
    { id: 3, name: 'height', priority: 6 },
    { id: 4, name: 'dlinna huia', priority: 9 },
    { id: 5, name: 'shirina zhopi', priority: 10 },
  ];
  expandedElement: any;
  constructor() { }

  ngOnInit() {
  }
}

export interface Option {
  id: number;
  name: string;
  priority: number;
}
