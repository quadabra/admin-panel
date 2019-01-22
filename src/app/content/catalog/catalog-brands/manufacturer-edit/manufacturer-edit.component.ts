import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-manufacturer-edit',
  templateUrl: './manufacturer-edit.component.html',
  styleUrls: ['./manufacturer-edit.component.css']
})
export class ManufacturerEditComponent implements OnInit {
  manufacturerForm: FormGroup;
  dataSource = {
    name: 'SSO/',
    addedValue: 70,
    color: '#437588',
    info: [
      {name: 'Contacts', value: ''},
      {name: 'Site', value: ''},
      {name: 'Email', value: ''},
      {name: 'VK', value: ''},
      {name: 'Phone', value: ''},
      {name: 'Bank', value: ''},
      {name: 'Contract', value: ''},
      {name: 'Discount', value: ''},
      {name: 'Address', value: ''},
      {name: 'Delivery', value: ''},
      {name: 'Comment', value: ''},
    ],
  };
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.manufacturerForm = this.fb.group({
      bgColor: [''],
    });
  }
}
