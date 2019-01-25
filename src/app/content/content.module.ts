import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

import {CatalogModule} from './catalog/catalog.module';
import {WhModule} from './wh/wh.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    WhModule,
  ],
  exports: [
    WelcomeComponent,
    CatalogModule,
    WhModule,
  ],
})
export class ContentModule {
}
