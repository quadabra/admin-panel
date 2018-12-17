import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {MainNavComponent} from './main-nav.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import { NavUserComponent } from './nav-user/nav-user.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    MainNavComponent,
    NavMenuComponent,
    NavUserComponent
  ],
  providers: [],
  exports: [MainNavComponent]
})
export class MainNavModule {
}
