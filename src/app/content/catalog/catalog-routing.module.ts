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
        loadChildren: './delivery/delivery.module#DeliveryModule',
      },
      {
        path: 'options',
        loadChildren: './options/options.module#OptionsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}
