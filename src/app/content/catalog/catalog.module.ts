import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogBrandsComponent} from './catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';

import {MaterialModule} from '../../material.module';

@NgModule({
  declarations: [CatalogBrandsComponent, CatalogOptionsComponent, CatalogProductsComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: []
})
export class CatalogModule {
}
