import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {OrdersComponent} from './orders.component';
import {OrdersSetupComponent} from './orders-setup/orders-setup.component';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersSetupComponent,
      },
      {
        path: 'order',
        component: OrderDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
