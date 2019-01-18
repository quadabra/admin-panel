import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-catalog-options-edit',
  templateUrl: './catalog-options-edit.component.html',
  styleUrls: ['./catalog-options-edit.component.css']
})
export class CatalogOptionsEditComponent implements OnInit {
  hide = false;
  optionForm: FormGroup;
  selected = 'Color';
  optionTypes = ['Color', 'Size', 'Height', 'Special'];
  options = [];
  sizes = ['US', 'INT', 'RU', 'INCH', 'CENT'];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.optionForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

}
