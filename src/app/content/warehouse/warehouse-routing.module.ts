import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {WarehouseComponent} from './warehouse.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseComponent,
    children: [
      {
        path: 'incoming',
        loadChildren: './incoming/incoming.module#IncomingModule',
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule {
}
