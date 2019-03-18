import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from '../../material.module';
import {MainNavComponent} from './main-nav.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {NavUserComponent} from './nav-user/nav-user.component';
import {NavHeaderComponent} from './nav-header/nav-header.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    StoreModule.forFeature('header', {}),
  ],
  declarations: [
    MainNavComponent,
    NavMenuComponent,
    NavUserComponent,
    NavHeaderComponent
  ],
  providers: [],
  exports: [MainNavComponent]
})
export class MainNavModule {
}
