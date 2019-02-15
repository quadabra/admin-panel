import {NgtUniversalModule} from '@ng-toolkit/universal';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';

import {MainNavModule} from './main-nav/main-nav.module';
import {ContentModule} from './content/content.module';

import {ApiService} from './_api/api.service';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {AuthGuardService} from './_guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    MainNavModule,
    ContentModule,
  ],
  providers: [ApiService, AuthGuardService],
})
export class AppModule {
}
