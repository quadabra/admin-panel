import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeliveryRoutingModule} from './delivery-routing.module';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//  Components
import {DeliveryComponent} from './delivery.component';
import {DeliverySetupComponent} from './delivery-setup/delivery-setup.component';
import {DeliveryEditComponent} from './delivery-edit/delivery-edit.component';

const modules = [
  CommonModule,
  DeliveryRoutingModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];

const components = [
  DeliveryComponent,
  DeliverySetupComponent,
  DeliveryEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
})
export class DeliveryModule {
}
