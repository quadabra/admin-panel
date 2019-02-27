import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatalogRoutingModule} from './catalog-routing.module';
import {BrandsModule} from './brands/brands.module';

//  components
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [
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
