import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';

import {MaterialModule} from '../material.module';

import {CatalogBrandsComponent} from './catalog/catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog/catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog/catalog-products/catalog-products.component';

import {CatalogResolverService} from './catalog/catalog-products/catalog-resolver.service';
import {ProductDetailsComponent} from './catalog/catalog-products/product-details/product-details.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    CatalogBrandsComponent,
    CatalogOptionsComponent,
    CatalogProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    WelcomeComponent,
  ],
  providers: [
    CatalogResolverService,
  ]
})
export class ContentModule {
}
