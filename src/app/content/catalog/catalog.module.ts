import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatalogRoutingModule} from './catalog-routing.module';
import {BrandsModule} from './brands/brands.module';

//  components
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
import {CatalogDeliveryComponent} from './catalog-delivery/catalog-delivery.component';
import {CatalogDeliveryEditComponent} from './catalog-delivery/catalog-delivery-edit/catalog-delivery-edit.component';

//  resolvers
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [
    DetailsPropertiesComponent,
    CatalogOptionsComponent,
    CatalogProductsComponent,
    ProductDetailsComponent,
    DetailsImagesComponent,
    DetailsOptionsComponent,
    DetailsImageFormComponent,
    CatalogOptionsEditComponent,
    ProductItemsComponent,
    ItemsWhInfoComponent,
    CatalogDeliveryComponent,
    CatalogDeliveryEditComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogRoutingModule,
    BrandsModule,
  ],
})
export class CatalogModule {
}
