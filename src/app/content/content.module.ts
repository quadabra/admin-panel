import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavModule} from './main-nav/main-nav.module';
import {CatalogModule} from './catalog/catalog.module';
import {ContentRoutingModule} from './content-routing.module';

import {ContentComponent} from './content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    CatalogModule,
    MainNavModule,
    ContentRoutingModule,
  ],
  exports: [
  ],
})
export class ContentModule {
}
