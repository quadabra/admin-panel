import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-catalog-delivery-edit',
  templateUrl: './catalog-delivery-edit.component.html',
  styleUrls: ['./catalog-delivery-edit.component.css']
})
export class CatalogDeliveryEditComponent implements OnInit {
  deliveryForm: FormGroup;
  langs = ['Ru', 'En'];
  weightType: string;
  weightTypes = ['Regular', 'Volume'];
  ShowRestricted: string;
  ShowRestrictedItems = ['Yes', 'No'];

  constructor(private fb: FormBuilder) {
    this.deliveryForm = this.fb.group({
      deliveryName: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
