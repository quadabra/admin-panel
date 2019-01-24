import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalog-delivery',
  templateUrl: './catalog-delivery.component.html',
  styleUrls: ['./catalog-delivery.component.css']
})
export class CatalogDeliveryComponent implements OnInit {
  deliveryTypes = [
    {
      name: 'UPS',
      isEnabled: true
    },
    {
      name: 'EMS',
      isEnabled: false
    },
    {
      name: 'Go Postal',
      isEnabled: true
    },
    {
      name: 'vzhopy',
      isEnabled: false
    },
    {
      name: 'slow pochta',
      isEnabled: false
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.deliveryTypes, event.previousIndex, event.currentIndex);
  }
}
