import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatExpansionModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatExpansionModule,
    MatMenuModule,
  ]
})
export class MaterialModule {
}
