import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//  Components
import {CatalogComponent} from './catalog.component';
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';
import {ProductDetailsComponent} from './catalog-products/product-details/product-details.component';

// Resolvers
import {CatalogResolverService} from './catalog-products/catalog-resolver.service';
import {ProductResolverService} from './catalog-products/product-resolver.service';
import {ManufacturersResolverService} from './brands/brands-setup/manufacturers-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: CatalogProductsComponent,
            resolve: {productList: CatalogResolverService},
          },
          {
            path: ':id',
            component: ProductDetailsComponent,
            resolve: {product: ProductResolverService}
          }
        ]
      },
      {
        path: 'brands',
        loadChildren: './brands/brands.module#BrandsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CatalogResolverService,
    ProductResolverService,
    ManufacturersResolverService,
  ],
})
export class CatalogRoutingModule {
}
