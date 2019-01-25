import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhOrdersComponent} from './wh-orders/wh-orders.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [WhOrdersComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WhModule {
}
