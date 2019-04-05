import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../material.module';
import {PurchaseRoutingModule} from './purchase-routing.module';

//  Components
import { PurchaseSetupComponent } from './purchase-setup/purchase-setup.component';
import { PurchaseComponent } from './purchase.component';
import { PurchaseManualComponent } from './purchase-setup/purchase-manual/purchase-manual.component';
import { PurchaseAutoComponent } from './purchase-setup/purchase-auto/purchase-auto.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  PurchaseRoutingModule,
];

const components = [
  PurchaseComponent,
  PurchaseSetupComponent
];

@NgModule({
  declarations: [...components, PurchaseManualComponent, PurchaseAutoComponent],
  imports: [...modules],
  providers: [],
})
export class PurchaseModule { }
