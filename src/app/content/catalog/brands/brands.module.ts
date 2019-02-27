import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {BrandsRoutingModule} from './brands-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';

//  Components
import {BrandsComponent} from './brands.component';
import {BrandsSetupComponent} from './brands-setup/brands-setup.component';
import {BrandEditComponent} from './brand-edit/brand-edit.component';
import {ManufacturerEditComponent} from './manufacturer-edit/manufacturer-edit.component';

//  Services
import {ManufacturerApiService} from './manufacturer-edit/manufacturer-api.service';
import {BrandApiService} from './brand-edit/brand-api.service';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  BrandsRoutingModule,
  SharedModule,
];

const components = [
  BrandsComponent,
  BrandsSetupComponent,
  BrandEditComponent,
  ManufacturerEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [
    ManufacturerApiService,
    BrandApiService,
  ]
})
export class BrandsModule {
}
