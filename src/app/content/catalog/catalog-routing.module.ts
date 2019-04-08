import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {CatalogComponent} from './catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'brands',
        loadChildren: './brands/brands.module#BrandsModule',
      },
      {
        path: 'delivery',
        loadChildren: './delivery/delivery.module#PaymentsModule',
      },
      {
        path: 'options',
        loadChildren: './options/options.module#OptionsModule',
      },
      {
        path: 'incoming',
        loadChildren: './incoming/incoming.module#IncomingModule',
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule',
      },
      {
        path: 'assembly',
        loadChildren: './assembly/assembly.module#AssemblyModule',
      },
      {
        path: 'currency',
        loadChildren: './currency/currency.module#CurrencyModule',
      },
      {
        path: 'payments',
        loadChildren: './payments/payments.module#PaymentsModule',
      },
      {
        path: 'purchase',
        loadChildren: './purchase/purchase.module#PurchaseModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}
