import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {ProductsRoutingModule} from './products-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';

//  Components
import {ProductsComponent} from './products.component';
import {ProductsSetupComponent} from './products-setup/products-setup.component';
import {ProductDetailsComponent} from './product-edit/product-details.component';
import {DetailsPropertiesComponent} from './product-edit/details-properties/details-properties.component';
import {DetailsImagesComponent} from './product-edit/details-images/details-images.component';
import {DetailsOptionsComponent} from './product-edit/details-options/details-options.component';
import {DetailsImageFormComponent} from './product-edit/details-images/details-image-form/details-image-form.component';
import {ProductItemsComponent} from './products-setup/product-items/product-items.component';
import {ItemsWhInfoComponent} from './products-setup/product-items/items-whinfo/items-wh-info.component';

const modules = [
  CommonModule,
  MaterialModule,
  ProductsRoutingModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
];

const components = [
  ProductsComponent,
  DetailsPropertiesComponent,
  ProductsSetupComponent,
  ProductDetailsComponent,
  DetailsImagesComponent,
  DetailsOptionsComponent,
  DetailsImageFormComponent,
  ProductItemsComponent,
  ItemsWhInfoComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: []
})
export class ProductsModule {
}
