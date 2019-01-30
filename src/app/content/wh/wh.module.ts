import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhOrdersComponent} from './wh-orders/wh-orders.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WhIncomingComponent} from './wh-incoming/wh-incoming.component';
import { WhIncomingExpandComponent } from './wh-incoming/wh-incoming-expand/wh-incoming-expand.component';
import { WhIncomingEditComponent } from './wh-incoming/wh-incoming-edit/wh-incoming-edit.component';

@NgModule({
  declarations: [WhOrdersComponent, WhIncomingComponent, WhIncomingExpandComponent, WhIncomingEditComponent],
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