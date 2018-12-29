import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {IProduct} from '../../../../../_model/interface/product';

@Component({
  selector: 'app-details-options',
  templateUrl: './details-options.component.html',
  styleUrls: ['./details-options.component.css']
})
export class DetailsOptionsComponent implements OnInit {
  @Input() dataSource: IProduct;

  brands = {
    groupName: 'Brand',
    type: 'select',
    options: [
      {
        fieldName: 'Brand',
        list: [
          {value: 'sso-0', viewValue: 'SSO'},
          {value: 'ana-1', viewValue: 'ANA'},
          {value: 'tech-2', viewValue: 'Techincome'}
        ]
      },
      {
        fieldName: 'Manufacturers',
        list: [
          {value: 'sso-0', viewValue: 'SSO1'},
          {value: 'ana-1', viewValue: 'ANA2'},
          {value: 'tech-2', viewValue: 'Techincome3'}
        ]
      },
    ]
  };

  options = [
    {value: '2', viewValue: 'Weight'},
    {value: '3400', viewValue: 'Price Sell'},
    {value: '666', viewValue: 'Article'},
  ];

  setupOptionsTable = ['Remove', 'Value', 'Image', 'Weight', 'Price', 'Article'];

  setupOptions = [
    {
      value: '3-4',
      image: 'none',
      weight: {
        view: 'Weight',
        value: '32'
      },
      price: {
        view: 'Price',
        value: '100500',
      },
      article: {
        view: 'Article',
        value: ''
      },
    },
    {
      value: '3-4',
      image: 'none',
      weight: {
        view: 'Weight',
        value: ''
      },
      price: {
        view: 'Price',
        value: '',
      },
      article: {
        view: 'Article',
        value: 'asdasd'
      },
    },
    {
      value: '3-4',
      image: 'none',
      weight: {
        view: 'Weight',
        value: '77'
      },
      price: {
        view: 'Price',
        value: '2432',
      },
      article: {
        view: 'Article',
        value: 'zhopa'
      },
    }
  ];

  setOptions = [
    {view: 'height', values: ['4-5', '2-3', '3-4']},
    {view: 'color', values: ['tiger', 'atags', 'olive']},
    {view: 'size', values: ['48-50', '52-54', '56-64']}
  ];

  tabs = ['Height', 'Color', 'Size'];
  selected = new FormControl(0);

  addTab(name: string) {
    if (name) {
      this.tabs.push(name);
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
