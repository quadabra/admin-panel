import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {CatalogModule} from './catalog/catalog.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    CatalogModule
  ],
  exports: [
    WelcomeComponent,
    CatalogModule,
  ]
})
export class ContentModule {
}
