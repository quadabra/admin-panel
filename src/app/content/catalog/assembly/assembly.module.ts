import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../_shared/shared.module';
import {AssemblyRoutingModule} from './assembly-routing.module';

import { AssemblyComponent } from './assembly.component';
import { AssemblySetupComponent } from './assembly-setup/assembly-setup.component';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  AssemblyRoutingModule,
];

const components = [
  AssemblyComponent,
  AssemblySetupComponent,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
})
export class AssemblyModule { }
