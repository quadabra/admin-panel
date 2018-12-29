import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';

import {CatalogModule} from './catalog/catalog.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    WelcomeComponent,
    CatalogModule
  ],
})
export class ContentModule {
}
