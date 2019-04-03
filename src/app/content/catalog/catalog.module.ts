import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CatalogRoutingModule} from './catalog-routing.module';

//  components
import { CatalogComponent } from './catalog.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  CatalogRoutingModule,
];

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [...modules],
})
export class CatalogModule {
}
