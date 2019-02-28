import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrdersRoutingModule} from './orders-routing.module';

//  Components
import {OrdersComponent} from './orders.component';
import {OrdersSetupComponent} from './orders-setup/orders-setup.component';
import {OrderCardComponent} from './orders-setup/order-card/order-card.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {OrderDetailsDataComponent} from './order-details/order-details-data/order-details-data.component';
import {OrderDetailsHistoryComponent} from './order-details/order-details-history/order-details-history.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  OrdersRoutingModule,
];

const components = [
  OrdersComponent,
  OrdersSetupComponent,
  OrderCardComponent,
  OrderDetailsComponent,
  OrderDetailsDataComponent,
  OrderDetailsHistoryComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
})
export class OrdersModule {
}
