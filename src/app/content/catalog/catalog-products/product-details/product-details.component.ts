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
  dataSource: IProduct;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataSource = this.route.snapshot.data['product'];
    // this.route.data.subscribe(data => this.dataSource = data['product']);
  }

}
