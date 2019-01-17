import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../../../_model/interface/product';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  dataSource: IProduct;
  parentForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dataSource = this.route.snapshot.data['product'];
    this.parentForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.parentForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

}
