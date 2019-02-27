import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';
import {OptionsRoutingModule} from './options-routing.module';

//  Components
import {OptionsComponent} from './options.component';
import {OptionsSetupComponent} from './options-setup/options-setup.component';
import {OptionsEditComponent} from './options-edit/options-edit.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  OptionsRoutingModule,
];

const components = [
  OptionsComponent,
  OptionsSetupComponent,
  OptionsEditComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules]
})
export class OptionsModule {
}
