import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-currency-setup',
  templateUrl: './currency-setup.component.html',
  styleUrls: ['./currency-setup.component.css']
})
export class CurrencySetupComponent implements OnInit {
  currencyForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.currencyForm = this.fb.group({
      values: this.fb.group({
        name: '',
        value: '',
      })
    });
  }

  formSave(): void {
  }
}
