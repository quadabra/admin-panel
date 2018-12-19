import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogBrandsComponent} from './catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';

@NgModule({
  declarations: [CatalogBrandsComponent, CatalogOptionsComponent, CatalogProductsComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class CatalogModule {
}
