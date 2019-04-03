import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material.module';
import {CurrencyRoutingModule} from './currency-routing.module';

//  Components
import {CurrencyComponent} from './currency.component';
import { CurrencySetupComponent } from './currency-setup/currency-setup.component';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  CurrencyRoutingModule
];

const components = [
  CurrencyComponent
];

@NgModule({
  declarations: [...components, CurrencySetupComponent],
  imports: [...modules],
  providers: [],
})
export class CurrencyModule { }
