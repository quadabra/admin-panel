import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../../../_model/interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  langs = ['En', 'Ru', 'De', 'Fr'];
  dataSource: IProduct;
  brands = [
    {value: 'sso-0', viewValue: 'SSO'},
    {value: 'ana-1', viewValue: 'ANA'},
    {value: 'tech-2', viewValue: 'Techincome'}
  ];
  manufacrurers = [
    {value: 'sso-0', viewValue: 'SSO'},
    {value: 'ana-1', viewValue: 'ANA'},
    {value: 'tech-2', viewValue: 'Techincome'}
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSource = this.route.snapshot.data['product'];
    // this.route.data.subscribe(data => this.dataSource = data['product']);
  }

}
