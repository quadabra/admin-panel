import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalog-delivery',
  templateUrl: './payments-setup.component.html',
  styleUrls: ['./payments-setup.component.css']
})
export class PaymentsSetupComponent implements OnInit {
  deliveryTypes = [
    {
      name: 'paypal',
      isEnabled: true
    },
    {
      name: 'option1',
      isEnabled: false
    },
    {
      name: 'hren2',
      isEnabled: true
    },
    {
      name: 'vzhopy',
      isEnabled: false
    },
    {
      name: 'slow babki',
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
