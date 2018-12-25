import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../../../_model/interface/product';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  langs = ['En', 'Ru', 'De', 'Fr'];
  dataSource: IProduct;

  seoOptions = ['Link', 'Title', 'Keyword'];

  textfields = [
    {value: 'weight', viewValue: 'Weight'},
    {value: '', viewValue: 'WH Position'},
    {value: 'model', viewValue: 'Mail Model'},
    {value: 'code', viewValue: 'Vendor Code'},
    {value: 'priority', viewValue: 'Priority'},
  ];

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

  prices = {
    groupName: 'Prices',
    type: 'number',
    options: [
      {
        fieldName: 'Price Buy',
        value: '2000',
      },
      {
        fieldName: 'Price Sell',
        value: '3000',
      }
    ]
  };

  productCategories = new FormControl();
  categoryList: string[] = ['Option A', 'Mushroom', 'Option C', 'Option Z', 'Option S', 'Option XXXL'];

  availability = [
    {value: 'a10', viewValue: 'Preorder'},
    {value: 'a11', viewValue: 'Dropship'},
    {value: 'a12', viewValue: 'WH only'},
  ];

  status = [
    {value: 'a10', viewValue: 'Enabled'},
    {value: 'a11', viewValue: 'Disabled'},
    {value: 'a12', viewValue: 'By availability'},
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSource = this.route.snapshot.data['product'];
    // this.route.data.subscribe(data => this.dataSource = data['product']);
  }

}
