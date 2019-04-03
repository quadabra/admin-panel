import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-currency-setup',
  templateUrl: './currency-setup.component.html',
  styleUrls: ['./currency-setup.component.css']
})
export class CurrencySetupComponent implements OnInit {
  currencyForm: FormGroup;

  get values(): FormArray {
    return <FormArray>this.currencyForm.get('values');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.currencyForm = this.fb.group({
      values: this.fb.array([this.buildValues()])
    });
  }

  buildValues(): FormGroup {
    return this.fb.group({
      name: '',
      value: '',
    });
  }

  addValues(): void {
    this.values.push(this.buildValues());
  }

  formSave(): void {
  }
}
