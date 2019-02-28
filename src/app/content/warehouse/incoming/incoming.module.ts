import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';
import {IncomingRoutingModule} from './incoming-routing.module';

//  Components
import {IncomingSetupComponent} from './inconimg-setup/incoming-setup.component';
import {IncomingExpandComponent} from './inconimg-setup/incoming-expand/incoming-expand.component';
import {IncomingComponent} from './incoming.component';
import {IncomingEditComponent} from './incoming-edit/incoming-edit.component';
import {IncomingCheckComponent} from './incoming-check/incoming-check.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  IncomingRoutingModule,
];

const components = [
  IncomingComponent,
  IncomingSetupComponent,
  IncomingExpandComponent,
  IncomingEditComponent,
  IncomingCheckComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class IncomingModule {
}
