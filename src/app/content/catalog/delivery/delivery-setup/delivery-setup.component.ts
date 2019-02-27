import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalog-delivery',
  templateUrl: './delivery-setup.component.html',
  styleUrls: ['./delivery-setup.component.css']
})
export class DeliverySetupComponent implements OnInit {
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

  switch(i): void {
    this.deliveryTypes[i].isEnabled = !this.deliveryTypes[i].isEnabled;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.deliveryTypes, event.previousIndex, event.currentIndex);
  }
}
