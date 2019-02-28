import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WarehouseRoutingModule} from './warehouse-routing.module';

//  Components
import {WarehouseComponent} from './warehouse.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  WarehouseRoutingModule
];

@NgModule({
  declarations: [WarehouseComponent],
  imports: [...modules],
})
export class WarehouseModule {
}
