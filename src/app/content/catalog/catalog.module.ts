import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatalogRoutingModule} from './catalog-routing.module';

//  components
import {CatalogBrandsComponent} from './catalog-brands/catalog-brands.component';
import {CatalogOptionsComponent} from './catalog-options/catalog-options.component';
import {CatalogProductsComponent} from './catalog-products/catalog-products.component';
import {ProductDetailsComponent} from './catalog-products/product-details/product-details.component';
import {DetailsPropertiesComponent} from './catalog-products/product-details/details-properties/details-properties.component';
import {DetailsImagesComponent} from './catalog-products/product-details/details-images/details-images.component';
import {DetailsOptionsComponent} from './catalog-products/product-details/details-options/details-options.component';
import {DetailsImageFormComponent} from './catalog-products/product-details/details-images/details-image-form/details-image-form.component';
import {CatalogOptionsEditComponent} from './catalog-options/catalog-options-edit/catalog-options-edit.component';
import {ProductItemsComponent} from './catalog-products/product-items/product-items.component';
import {ItemsWhInfoComponent} from './catalog-products/product-items/items-whinfo/items-wh-info.component';
import {ManufacturerEditComponent} from './catalog-brands/manufacturer-edit/manufacturer-edit.component';
import {BrandEditComponent} from './catalog-brands/brand-edit/brand-edit.component';
import {CatalogDeliveryComponent} from './catalog-delivery/catalog-delivery.component';
import {CatalogDeliveryEditComponent} from './catalog-delivery/catalog-delivery-edit/catalog-delivery-edit.component';

//  resolvers
import {CatalogResolverService} from './catalog-products/catalog-resolver.service';
import {ProductResolverService} from './catalog-products/product-resolver.service';
import {CatalogBrandsResolverService} from './catalog-brands/catalog-brands-resolver.service';
import { CatalogComponent } from './catalog.component';

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
    CatalogOptionsEditComponent,
    ProductItemsComponent,
    ItemsWhInfoComponent,
    ManufacturerEditComponent,
    BrandEditComponent,
    CatalogDeliveryComponent,
    CatalogDeliveryEditComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogRoutingModule,
  ],
  providers: [
    // CatalogResolverService,
    // ProductResolverService,
    // CatalogBrandsResolverService
  ]
})
export class CatalogModule {
}
