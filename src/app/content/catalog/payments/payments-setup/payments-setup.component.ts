import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalog-delivery',
  templateUrl: './payments-setup.component.html',
  styleUrls: ['./payments-setup.component.css']
})
export class PaymentsSetupComponent implements OnInit {
  dataSource = [
    {
      name: 'paypal',
      isEnabled: true,
      shopData: [
        {
          name: 'Grey-shop.ru',
          discount: 5,
          isEnabled: false,
        },
        {
          name: 'Orion-spec.ru',
          discount: 0,
          isEnabled: true,
        },
      ],
    },
    {
      name: 'option1',
      isEnabled: false,
      shopData: [
        {
          name: 'Grey-shop.ru',
          discount: 5,
          isEnabled: false,
        },
        {
          name: 'Orion-spec.ru',
          discount: 0,
          isEnabled: true,
        },
      ],
    },
    {
      name: 'hren2',
      isEnabled: true,
      shopData: [
        {
          name: 'Grey-shop.ru',
          discount: 5,
          isEnabled: false,
        },
        {
          name: 'Orion-spec.ru',
          discount: 0,
          isEnabled: true,
        },
      ],
    },
    {
      name: 'vzhopy',
      isEnabled: false,
      shopData: [
        {
          name: 'Grey-shop.ru',
          discount: 5,
          isEnabled: false,
        },
        {
          name: 'Orion-spec.ru',
          discount: 0,
          isEnabled: true,
        },
      ],
    },
    {
      name: 'slow babki',
      isEnabled: false,
      shopData: [
        {
          name: 'Grey-shop.ru',
          discount: 5,
          isEnabled: false,
        },
        {
          name: 'Orion-spec.ru',
          discount: 0,
          isEnabled: true,
        },
      ],
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  switch(i): void {
    this.dataSource[i].isEnabled = !this.dataSource[i].isEnabled;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
  }
}
