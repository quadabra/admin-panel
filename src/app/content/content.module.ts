import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavModule} from './main-nav/main-nav.module';
import {CatalogModule} from './catalog/catalog.module';
import {ContentRoutingModule} from './content-routing.module';

import {ContentComponent} from './content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    ContentComponent,
    NotFoundComponent,
    WelcomeComponent,
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
