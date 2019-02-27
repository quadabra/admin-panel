import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {ProductsComponent} from './products.component';
import {ProductsSetupComponent} from './products-setup/products-setup.component';
import {ProductDetailsComponent} from './product-edit/product-details.component';

//  Resolvers
import {CatalogResolverService} from './products-setup/catalog-resolver.service';
import {ProductResolverService} from './products-setup/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsSetupComponent,
        resolve: {productList: CatalogResolverService}
      },
      {
        path: ':id',
        component: ProductDetailsComponent,
        resolve: {product: ProductResolverService}
      }
    ]
  }
];

const resolvers = [
  CatalogResolverService,
  ProductResolverService,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [...resolvers]
})
export class ProductsRoutingModule {
}
