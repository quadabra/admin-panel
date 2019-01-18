import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatalogBrandsComponent} from './catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';
import {ProductDetailsComponent} from './catalog-products/product-details/product-details.component';
import {DetailsPropertiesComponent} from './catalog-products/product-details/details-properties/details-properties.component';
import {DetailsImagesComponent} from './catalog-products/product-details/details-images/details-images.component';
import {CatalogResolverService} from './catalog-products/catalog-resolver.service';
import {ProductResolverService} from './catalog-products/product-resolver.service';
import {DetailsOptionsComponent} from './catalog-products/product-details/details-options/details-options.component';
import {DetailsImageFormComponent} from './catalog-products/product-details/details-images/details-image-form/details-image-form.component';
import { CatalogOptionsEditComponent } from './catalog-options/catalog-options-edit/catalog-options-edit.component';

@NgModule({
  declarations: [
    DetailsPropertiesComponent,
    CatalogBrandsComponent,
    CatalogOptionsComponent,
    CatalogProductsComponent,
    ProductDetailsComponent,
    DetailsImagesComponent,
    DetailsOptionsComponent,
    DetailsImageFormComponent,
    CatalogOptionsEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CatalogResolverService,
    ProductResolverService,
  ]
})
export class CatalogModule {
}
