import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WhOrdersComponent} from './wh-orders/wh-orders.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WhIncomingComponent} from './wh-incoming/wh-incoming.component';
import { WhIncomingExpandComponent } from './wh-incoming/wh-incoming-expand/wh-incoming-expand.component';
import { WhIncomingEditComponent } from './wh-incoming/wh-incoming-edit/wh-incoming-edit.component';
import { WhOrderDetailsComponent } from './wh-orders/wh-order-details/wh-order-details.component';
import { WhOrderCardComponent } from './wh-orders/wh-order-card/wh-order-card.component';
import { WhOrderDetailsDataComponent } from './wh-orders/wh-order-details/wh-order-details-data/wh-order-details-data.component';
import { WhOrderDetailsHistoryComponent } from './wh-orders/wh-order-details/wh-order-details-history/wh-order-details-history.component';
import { WhIncomingCheckComponent } from './wh-incoming/wh-incoming-check/wh-incoming-check.component';

@NgModule({
  declarations: [WhOrdersComponent, WhIncomingComponent, WhIncomingExpandComponent, WhIncomingEditComponent, WhOrderDetailsComponent, WhOrderCardComponent, WhOrderDetailsDataComponent, WhOrderDetailsHistoryComponent, WhIncomingCheckComponent],
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
