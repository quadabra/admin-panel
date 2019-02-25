import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {BrandsRoutingModule} from './brands-routing.module';
import {BrandsComponent} from './brands.component';
import {BrandsSetupComponent} from './brands-setup/brands-setup.component';
import {BrandEditComponent} from './brand-edit/brand-edit.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManufacturerApiService} from './manufacturer-edit/manufacturer-api.service';
import {BrandApiService} from './brand-edit/brand-api.service';
import {SharedModule} from '../../../_shared/shared.module';

const components = [
  BrandsComponent,
  BrandsSetupComponent,
  BrandEditComponent,
  ManufacturerEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrandsRoutingModule,
    SharedModule
  ],
  providers: [
    ManufacturerApiService,
    BrandApiService,
  ]
})
export class BrandsModule {
}
