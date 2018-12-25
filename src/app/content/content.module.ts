import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CatalogBrandsComponent} from './catalog/catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog/catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog/catalog-products/catalog-products.component';

import {CatalogResolverService} from './catalog/catalog-products/catalog-resolver.service';
import {ProductResolverService} from './catalog/catalog-products/product-resolver.service';
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
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    WelcomeComponent,
  ],
  providers: [
    CatalogResolverService,
    ProductResolverService,
  ]
})
export class ContentModule {
}
