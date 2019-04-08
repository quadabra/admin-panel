import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentsRoutingModule} from './payments-routing.module';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';

//  Components
import {PaymentsComponent} from './payments.component';
import {PaymentsSetupComponent} from './payments-setup/payments-setup.component';
import {PaymentsEditComponent} from './payments-edit/payments-edit.component';

const modules = [
  CommonModule,
  PaymentsRoutingModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
];

const components = [
  PaymentsComponent,
  PaymentsSetupComponent,
  PaymentsEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
})
export class PaymentsModule {
}
