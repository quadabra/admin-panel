import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//  Components
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';


// Resolvers
import {CatalogResolverService} from './catalog-products/catalog-resolver.service';
import {CatalogComponent} from './catalog.component';


const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'products',
    component: CatalogProductsComponent,
    resolve: CatalogResolverService
  },
  {
    path: '**',
    component: CatalogProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}
